import Web3 from 'web3/dist/web3.min.js'

export const connectWalletHandler = async () => {
    if(typeof window !== "undefined" && typeof window.ethereum !== 'undefined'){
        try{
        window.ethereum.request({method : 'eth_requestAccounts'}).then(res=>{
            localStorage.setItem("account_address",res)
            window.location.reload()
        })
        // let web3 = new Web3(window.ethereum)
        }catch(err){
            localStorage.removeItem("account_address")
            console.log(err.message)
        }
    }else{
        // metamask not installed
        console.log('MetaMask not installed')
        alert("افزونه Metamask را نصب کنید.")
        return -1
    }
};
