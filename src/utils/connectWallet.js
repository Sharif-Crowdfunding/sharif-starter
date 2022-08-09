export const connectWalletHandler = () => {
    if(typeof window !== "undefined" && typeof window.ethereum !== 'undefined'){
        window.ethereum.request({method : 'eth_requestAccounts'})
    }else{
        // metamask not installed
        console.log('MetaMask not installed')
        return -1
    }
};
