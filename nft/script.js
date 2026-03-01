const contractAddress = "0xe5e709b6936573b03fAf8e4Cf133F81A6807642C"; 

const expectedChainId = '0xaa36a7'; // Sepolia
const expectedChainName = 'Sepolia';

const abi = [{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"string","name":"baseURI_","type":"string"},{"internalType":"address","name":"priceFeed_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AlreadyApproved","type":"error"},{"inputs":[],"name":"InsufficientPayment","type":"error"},{"inputs":[],"name":"InvalidPrice","type":"error"},{"inputs":[],"name":"MaxSupplyReached","type":"error"},{"inputs":[],"name":"MintPaused","type":"error"},{"inputs":[],"name":"NonexistentToken","type":"error"},{"inputs":[],"name":"NotApprovedOrOwner","type":"error"},{"inputs":[],"name":"NotOwner","type":"error"},{"inputs":[],"name":"SelfApproval","type":"error"},{"inputs":[],"name":"TransferFailed","type":"error"},{"inputs":[],"name":"ZeroAddress","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldPriceFeed","type":"address"},{"indexed":true,"internalType":"address","name":"newPriceFeed","type":"address"}],"name":"PriceFeedUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceFeed","outputs":[{"internalType":"contract AggregatorV3Interface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newPriceFeed","type":"address"}],"name":"setPriceFeed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];

let provider, signer, contract, account;

const connectBtn = document.getElementById('connectBtn');
const accountSpan = document.getElementById('account');
const networkSpan = document.getElementById('network');
const mintBtn = document.getElementById('mintBtn');
const totalMintedSpan = document.getElementById('totalMinted');
const remainingSpan = document.getElementById('remaining');
const ethPriceSpan = document.getElementById('ethPrice');
const userBalanceSpan = document.getElementById('userBalance');
const pauseStatusSpan = document.getElementById('pauseStatus');
const nftList = document.getElementById('nftList');

connectBtn.addEventListener('click', () => {
    if (account) disconnectWallet();
    else connectWallet();
});
mintBtn.addEventListener('click', mintNFT);

async function checkNetwork() {
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    if (chainId !== expectedChainId) {
        networkSpan.innerText = `Wrong Network (${expectedChainName} required)`;
        networkSpan.style.color = '#ff5555';
        return false;
    } else {
        networkSpan.innerText = expectedChainName;
        networkSpan.style.color = '#55ff55';
        return true;
    }
}

async function connectWallet() {
    if (!window.ethereum) return alert('MetaMask not detected');
    try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        const networkOk = await checkNetwork();
        if (!networkOk) {
            alert(`Please switch to ${expectedChainName} network in MetaMask`);
            return;
        }
        
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        account = await signer.getAddress();
        accountSpan.innerText = account.slice(0,6) + '...' + account.slice(-4);
        connectBtn.innerText = 'Disconnect';

        contract = new ethers.Contract(contractAddress, abi, signer);
        await updateUI();

        window.ethereum.on('accountsChanged', (accounts) => {
            if (accounts.length === 0) disconnectWallet();
            else {
                account = accounts[0];
                accountSpan.innerText = account.slice(0,6) + '...' + account.slice(-4);
                updateUI();
            }
        });

        window.ethereum.on('chainChanged', () => {
            window.location.reload();
        });
    } catch (err) {
        console.error(err);
    }
}

function disconnectWallet() {
    account = null;
    signer = null;
    contract = null;
    accountSpan.innerText = '';
    networkSpan.innerText = '';
    connectBtn.innerText = 'Connect Wallet Metamask';
    mintBtn.disabled = true;
    totalMintedSpan.innerText = '0';
    remainingSpan.innerText = '10000';
    ethPriceSpan.innerText = '0';
    userBalanceSpan.innerText = '0';
    pauseStatusSpan.innerText = 'Active';
    pauseStatusSpan.style.color = '#55ff55';
    nftList.innerHTML = '<li>No NFTs yet</li>';
}

async function updateUI() {
    if (!contract || !account) return;
    try {
        const total = await contract.totalSupply();
        totalMintedSpan.innerText = total.toString();
        remainingSpan.innerText = (10000 - total).toString();

        const priceWei = await contract.getMintPrice();
        ethPriceSpan.innerText = ethers.utils.formatEther(priceWei);

        const balance = await contract.balanceOf(account);
        userBalanceSpan.innerText = balance.toString();

        const paused = await contract.paused();
        pauseStatusSpan.innerText = paused ? 'Paused' : 'Active';
        pauseStatusSpan.style.color = paused ? '#ff5555' : '#55ff55';
        mintBtn.disabled = paused;

        const tokenIds = [];
        for (let i = 1; i <= total; i++) {
            try {
                const owner = await contract.ownerOf(i);
                if (owner.toLowerCase() === account.toLowerCase()) {
                    tokenIds.push(i);
                }
            } catch (e) {
            }
        }

        if (tokenIds.length > 0) {
            nftList.innerHTML = tokenIds.map(id => `<li>#${id}</li>`).join('');
        } else {
            nftList.innerHTML = '<li>No NFTs yet</li>';
        }
    } catch (err) {
        console.error(err);
    }
}

async function mintNFT() {
    if (!contract) return;
    try {
        const priceWei = await contract.getMintPrice();
        const tx = await contract.mint({ value: priceWei });
        const receipt = await tx.wait();

        const mintEvents = await contract.queryFilter(
            contract.filters.Mint(account),
            receipt.blockNumber,
            receipt.blockNumber
        );
        if (mintEvents.length === 0) {
            throw new Error('Mint event not found');
        }
        const tokenId = mintEvents[0].args.tokenId.toString();

        const symbol = await contract.symbol();
        const image = await contract.baseURI();
        await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC721',
                options: {
                    address: contractAddress,
                    tokenId: tokenId,
                    symbol: symbol,
                    image: image,
                },
            },
        });

        await updateUI();
        alert(`Mint successful! Token ID: ${tokenId}`);
    } catch (err) {
        console.error(err);
        alert('Mint failed: ' + err.message);
    }
}
