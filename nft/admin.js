const contractAddress = "0xe5e709b6936573b03fAf8e4Cf133F81A6807642C"; 

const expectedChainId = '0xaa36a7'; // Sepolia
const expectedChainName = 'Sepolia';

const abi = [{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"string","name":"baseURI_","type":"string"},{"internalType":"address","name":"priceFeed_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AlreadyApproved","type":"error"},{"inputs":[],"name":"InsufficientPayment","type":"error"},{"inputs":[],"name":"InvalidPrice","type":"error"},{"inputs":[],"name":"MaxSupplyReached","type":"error"},{"inputs":[],"name":"MintPaused","type":"error"},{"inputs":[],"name":"NonexistentToken","type":"error"},{"inputs":[],"name":"NotApprovedOrOwner","type":"error"},{"inputs":[],"name":"NotOwner","type":"error"},{"inputs":[],"name":"SelfApproval","type":"error"},{"inputs":[],"name":"TransferFailed","type":"error"},{"inputs":[],"name":"ZeroAddress","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldPriceFeed","type":"address"},{"indexed":true,"internalType":"address","name":"newPriceFeed","type":"address"}],"name":"PriceFeedUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceFeed","outputs":[{"internalType":"contract AggregatorV3Interface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newPriceFeed","type":"address"}],"name":"setPriceFeed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];

let provider, signer, contract, account, owner;

const connectBtn = document.getElementById('connectBtn');
const accountSpan = document.getElementById('account');
const networkSpan = document.getElementById('network');
const withdrawBtn = document.getElementById('withdrawBtn');
const updateBaseURIBtn = document.getElementById('updateBaseURIBtn');
const transferOwnershipBtn = document.getElementById('transferOwnershipBtn');
const pauseBtn = document.getElementById('pauseBtn');
const unpauseBtn = document.getElementById('unpauseBtn');
const updatePriceFeedBtn = document.getElementById('updatePriceFeedBtn');
const baseURIInput = document.getElementById('baseURIInput');
const newOwnerInput = document.getElementById('newOwnerInput');
const priceFeedInput = document.getElementById('priceFeedInput');
const contractBalanceSpan = document.getElementById('contractBalance');
const currentPriceFeedSpan = document.getElementById('currentPriceFeed');
const mintTbody = document.querySelector('#mintTable tbody');
const withdrawTbody = document.querySelector('#withdrawTable tbody');

connectBtn.addEventListener('click', () => {
    if (account) disconnectWallet();
    else connectWallet();
});
withdrawBtn.addEventListener('click', withdraw);
updateBaseURIBtn.addEventListener('click', updateBaseURI);
transferOwnershipBtn.addEventListener('click', transferOwnership);
pauseBtn.addEventListener('click', pause);
unpauseBtn.addEventListener('click', unpause);
updatePriceFeedBtn.addEventListener('click', updatePriceFeed);

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
        owner = await contract.owner();

        if (account.toLowerCase() !== owner.toLowerCase()) {
            alert('You are not the owner');
            document.querySelector('.info').style.display = 'none';
        } else {
            withdrawBtn.disabled = false;
            updateBaseURIBtn.disabled = false;
            transferOwnershipBtn.disabled = false;
            pauseBtn.disabled = false;
            unpauseBtn.disabled = false;
            updatePriceFeedBtn.disabled = false;
            await updateAdminUI();
            await loadHistory();
        }

        window.ethereum.on('accountsChanged', (accounts) => {
            if (accounts.length === 0) disconnectWallet();
            else {
                account = accounts[0];
                accountSpan.innerText = account.slice(0,6) + '...' + account.slice(-4);
                if (account.toLowerCase() === owner.toLowerCase()) {
                    withdrawBtn.disabled = false;
                    updateBaseURIBtn.disabled = false;
                    transferOwnershipBtn.disabled = false;
                    pauseBtn.disabled = false;
                    unpauseBtn.disabled = false;
                    updatePriceFeedBtn.disabled = false;
                    updateAdminUI();
                    loadHistory();
                } else {
                    withdrawBtn.disabled = true;
                    updateBaseURIBtn.disabled = true;
                    transferOwnershipBtn.disabled = true;
                    pauseBtn.disabled = true;
                    unpauseBtn.disabled = true;
                    updatePriceFeedBtn.disabled = true;
                }
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
    withdrawBtn.disabled = true;
    updateBaseURIBtn.disabled = true;
    transferOwnershipBtn.disabled = true;
    pauseBtn.disabled = true;
    unpauseBtn.disabled = true;
    updatePriceFeedBtn.disabled = true;
    contractBalanceSpan.innerText = '0';
    currentPriceFeedSpan.innerText = '0x...';
    mintTbody.innerHTML = '';
    withdrawTbody.innerHTML = '';
}

async function updateAdminUI() {
    if (!contract) return;
    const balance = await provider.getBalance(contractAddress);
    contractBalanceSpan.innerText = ethers.utils.formatEther(balance);
    const currentBaseURI = await contract.baseURI();
    baseURIInput.value = currentBaseURI;
    
    const priceFeedAddress = await contract.priceFeed();
    currentPriceFeedSpan.innerText = priceFeedAddress;
}

async function loadHistory() {
    const mintFilter = contract.filters.Mint();
    const withdrawFilter = contract.filters.Withdraw();

    const mintEvents = await contract.queryFilter(mintFilter, 0, 'latest');
    const withdrawEvents = await contract.queryFilter(withdrawFilter, 0, 'latest');

    mintTbody.innerHTML = '';
    for (const event of mintEvents) {
        const block = await event.getBlock();
        const { minter, tokenId, price } = event.args;
        const row = `<tr><td>${minter}</td><td>${tokenId.toString()}</td><td>${ethers.utils.formatEther(price)}</td><td>${new Date(block.timestamp*1000).toLocaleString()}</td></tr>`;
        mintTbody.innerHTML += row;
    }

    withdrawTbody.innerHTML = '';
    for (const event of withdrawEvents) {
        const block = await event.getBlock();
        const { amount } = event.args;
        const row = `<tr><td>${ethers.utils.formatEther(amount)}</td><td>${new Date(block.timestamp*1000).toLocaleString()}</td></tr>`;
        withdrawTbody.innerHTML += row;
    }
}

async function withdraw() {
    if (!contract) return;
    try {
        const tx = await contract.withdraw();
        await tx.wait();
        await updateAdminUI();
        await loadHistory();
    } catch (err) {
        console.error(err);
        alert('Withdraw failed: ' + err.message);
    }
}

async function updateBaseURI() {
    if (!contract) return;
    const newURI = baseURIInput.value;
    try {
        const tx = await contract.setBaseURI(newURI);
        await tx.wait();
        alert('Base URI updated');
    } catch (err) {
        console.error(err);
        alert('Update failed: ' + err.message);
    }
}

async function transferOwnership() {
    if (!contract) return;
    const newOwner = newOwnerInput.value;
    if (!ethers.utils.isAddress(newOwner)) {
        alert('Invalid address');
        return;
    }
    try {
        const tx = await contract.transferOwnership(newOwner);
        await tx.wait();
        alert('Ownership transferred');
        owner = newOwner;
    } catch (err) {
        console.error(err);
        alert('Transfer failed: ' + err.message);
    }
}

async function pause() {
    if (!contract) return;
    try {
        const tx = await contract.pause();
        await tx.wait();
        alert('Minting paused');
    } catch (err) {
        alert('Pause failed: ' + err.message);
    }
}

async function unpause() {
    if (!contract) return;
    try {
        const tx = await contract.unpause();
        await tx.wait();
        alert('Minting unpaused');
    } catch (err) {
        alert('Unpause failed: ' + err.message);
    }
}

async function updatePriceFeed() {
    if (!contract) return;
    const newPriceFeed = priceFeedInput.value;
    if (!ethers.utils.isAddress(newPriceFeed)) {
        alert('Invalid address');
        return;
    }
    try {
        const tx = await contract.setPriceFeed(newPriceFeed);
        await tx.wait();
        alert('Price feed updated');
        await updateAdminUI();
    } catch (err) {
        alert('Update failed: ' + err.message);
    }
}
