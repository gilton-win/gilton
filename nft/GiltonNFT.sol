// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

interface AggregatorV3Interface {
    function latestRoundData()
        external
        view
        returns (
            uint80 roundId,
            int256 answer,
            uint256 startedAt,
            uint256 updatedAt,
            uint80 answeredInRound
        );
}

interface IERC721Receiver {
    function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes calldata data
    ) external returns (bytes4);
}

contract GiltonNFT {
    /*//////////////////////////////////////////////////////////////
                                ERRORS
    //////////////////////////////////////////////////////////////*/
    error NotOwner();
    error MaxSupplyReached();
    error InsufficientPayment();
    error InvalidPrice();
    error TransferFailed();
    error NonexistentToken();
    error NotApprovedOrOwner();
    error ZeroAddress();
    error SelfApproval();
    error AlreadyApproved();
    error MintPaused();

    /*//////////////////////////////////////////////////////////////
                                EVENTS
    //////////////////////////////////////////////////////////////*/
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
    event Mint(address indexed minter, uint256 tokenId, uint256 price);
    event Withdraw(address indexed owner, uint256 amount);
    event OwnershipTransferred(address indexed oldOwner, address indexed newOwner);
    event Paused(address indexed owner);
    event Unpaused(address indexed owner);
    event PriceFeedUpdated(address indexed oldPriceFeed, address indexed newPriceFeed);

    /*//////////////////////////////////////////////////////////////
                                STORAGE
    //////////////////////////////////////////////////////////////*/
    string private _name;
    string private _symbol;

    // Full metadata JSON
    string public baseURI;

    mapping(uint256 => address) private _owners;
    mapping(address => uint256) private _balances;

    // ERC721 Approvals
    mapping(uint256 => address) private _tokenApprovals;
    mapping(address => mapping(address => bool)) private _operatorApprovals;

    uint256 public totalSupply;
    uint256 public constant MAX_SUPPLY = 10000;

    address public owner;
    AggregatorV3Interface public priceFeed;

    bool private _locked;
    bool public paused; // false = active, true = paused

    modifier nonReentrant() {
        require(!_locked, "Reentrant");
        _locked = true;
        _;
        _locked = false;
    }

    modifier onlyOwner() {
        if (msg.sender != owner) revert NotOwner();
        _;
    }

    modifier whenNotPaused() {
        if (paused) revert MintPaused();
        _;
    }

    constructor(
        string memory name_,
        string memory symbol_,
        string memory baseURI_,
        address priceFeed_
    ) {
        _name = name_;
        _symbol = symbol_;
        baseURI = baseURI_;
        owner = msg.sender;
        priceFeed = AggregatorV3Interface(priceFeed_);
        paused = false;
    }

    /*//////////////////////////////////////////////////////////////
                                ERC165
    //////////////////////////////////////////////////////////////*/
    function supportsInterface(bytes4 interfaceId) public pure returns (bool) {
        return
            interfaceId == 0x80ac58cd || // ERC721
            interfaceId == 0x5b5e139f || // ERC721Metadata
            interfaceId == 0x01ffc9a7;   // ERC165
    }

    /*//////////////////////////////////////////////////////////////
                                VIEW FUNCTIONS
    //////////////////////////////////////////////////////////////*/
    function name() public view returns (string memory) {
        return _name;
    }

    function symbol() public view returns (string memory) {
        return _symbol;
    }

    function balanceOf(address account) public view returns (uint256) {
        if (account == address(0)) revert ZeroAddress();
        return _balances[account];
    }

    function ownerOf(uint256 tokenId) public view returns (address) {
        address tokenOwner = _owners[tokenId];
        if (tokenOwner == address(0)) revert NonexistentToken();
        return tokenOwner;
    }

    function tokenURI(uint256 tokenId) public view returns (string memory) {
        if (_owners[tokenId] == address(0)) revert NonexistentToken();
        return baseURI; // Same metadata for all tokens
    }

    function getApproved(uint256 tokenId) public view returns (address) {
        if (_owners[tokenId] == address(0)) revert NonexistentToken();
        return _tokenApprovals[tokenId];
    }

    function isApprovedForAll(address tokenOwner, address operator) public view returns (bool) {
        return _operatorApprovals[tokenOwner][operator];
    }

    function getMintPrice() public view returns (uint256) {
        (
            ,
            int256 answer,
            ,
            uint256 updatedAt,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();

        if (answer <= 0) revert InvalidPrice();
        if (answeredInRound == 0) revert InvalidPrice();
        if (block.timestamp - updatedAt > 1 hours) revert InvalidPrice();

        uint256 price = uint256(answer);

        // $10 converted to wei (rounded up)
        return (10 * 10**26 + price - 1) / price;
    }

    /*//////////////////////////////////////////////////////////////
                            APPROVAL FUNCTIONS
    //////////////////////////////////////////////////////////////*/
    function approve(address to, uint256 tokenId) external {
        address tokenOwner = ownerOf(tokenId);
        if (to == tokenOwner) revert SelfApproval();

        if (msg.sender != tokenOwner && !isApprovedForAll(tokenOwner, msg.sender)) {
            revert NotApprovedOrOwner();
        }

        _tokenApprovals[tokenId] = to;
        emit Approval(tokenOwner, to, tokenId);
    }

    function setApprovalForAll(address operator, bool approved) external {
        if (operator == msg.sender) revert SelfApproval();
        _operatorApprovals[msg.sender][operator] = approved;
        emit ApprovalForAll(msg.sender, operator, approved);
    }

    /*//////////////////////////////////////////////////////////////
                            TRANSFER FUNCTIONS
    //////////////////////////////////////////////////////////////*/
    function transferFrom(address from, address to, uint256 tokenId) public {
        if (!_isApprovedOrOwner(msg.sender, tokenId)) revert NotApprovedOrOwner();
        if (to == address(0)) revert ZeroAddress();

        _transfer(from, to, tokenId);
    }

    function safeTransferFrom(address from, address to, uint256 tokenId) external {
        safeTransferFrom(from, to, tokenId, "");
    }

    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory data) public {
        transferFrom(from, to, tokenId);
        if (!_checkOnERC721Received(from, to, tokenId, data)) {
            revert TransferFailed();
        }
    }

    function _transfer(address from, address to, uint256 tokenId) internal {
        address tokenOwner = ownerOf(tokenId);
        if (tokenOwner != from) revert NotApprovedOrOwner();

        delete _tokenApprovals[tokenId];

        _balances[from]--;
        _balances[to]++;

        _owners[tokenId] = to;

        emit Transfer(from, to, tokenId);
    }

    function _isApprovedOrOwner(address spender, uint256 tokenId) internal view returns (bool) {
        address tokenOwner = ownerOf(tokenId);
        return (
            spender == tokenOwner ||
            getApproved(tokenId) == spender ||
            isApprovedForAll(tokenOwner, spender)
        );
    }

    function _checkOnERC721Received(address from, address to, uint256 tokenId, bytes memory data) private returns (bool) {
        if (to.code.length > 0) {
            try IERC721Receiver(to).onERC721Received(msg.sender, from, tokenId, data) returns (bytes4 retval) {
                return retval == IERC721Receiver.onERC721Received.selector;
            } catch (bytes memory reason) {
                if (reason.length == 0) {
                    revert TransferFailed();
                } else {
                    assembly {
                        revert(add(32, reason), mload(reason))
                    }
                }
            }
        } else {
            return true;
        }
    }

    /*//////////////////////////////////////////////////////////////
                                MINT FUNCTION
    //////////////////////////////////////////////////////////////*/
    function mint() external payable nonReentrant whenNotPaused {
        if (totalSupply >= MAX_SUPPLY) revert MaxSupplyReached();

        uint256 price = getMintPrice();
        if (msg.value < price) revert InsufficientPayment();

        uint256 tokenId = totalSupply + 1;

        _balances[msg.sender]++;
        _owners[tokenId] = msg.sender;
        totalSupply++;

        emit Transfer(address(0), msg.sender, tokenId);
        emit Mint(msg.sender, tokenId, price);

        if (msg.value > price) {
            (bool success, ) = msg.sender.call{value: msg.value - price}("");
            if (!success) revert TransferFailed();
        }
    }

    /*//////////////////////////////////////////////////////////////
                            OWNER FUNCTIONS
    //////////////////////////////////////////////////////////////*/
    function withdraw() external onlyOwner nonReentrant {
        uint256 balance = address(this).balance;
        (bool success, ) = owner.call{value: balance}("");
        if (!success) revert TransferFailed();
        emit Withdraw(owner, balance);
    }

    function transferOwnership(address newOwner) external onlyOwner {
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    function setBaseURI(string memory newBaseURI) external onlyOwner {
        baseURI = newBaseURI;
    }

    function pause() external onlyOwner {
        paused = true;
        emit Paused(owner);
    }

    function unpause() external onlyOwner {
        paused = false;
        emit Unpaused(owner);
    }

    function setPriceFeed(address newPriceFeed) external onlyOwner {
        if (newPriceFeed == address(0)) revert ZeroAddress();
        address oldPriceFeed = address(priceFeed);
        priceFeed = AggregatorV3Interface(newPriceFeed);
        emit PriceFeedUpdated(oldPriceFeed, newPriceFeed);
    }
}
