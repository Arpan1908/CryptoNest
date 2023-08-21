document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("form").addEventListener("click", handler );
});

function handler(){
    document.getElementById("center").style.display = "flex";

    const private_key = document.getElementById("private_key").value;
    const amount = document.getElementById("amount").value;
    const address = document.getElementById("address").value;

    
    //provider

    const provider = new ethers.providers.JsonRpcProvider("https://eth.getblock.io/a4c5ac6c-5bcd-4f40-82a3-f9b402cbd1d7/goerli/");
    
    let wallet = new ethers.Wallet(private_key, provider);

    const transaction = {
        to: address,
        value: ethers.utils.parseEther(amount),
    };

    var a = document.getElementById("link");
    a.href = "some link";

    wallet.sendTransaction(transaction).then((txObj) =>{
        console.log("txHash",txObj.hash);
        
        document.getElementById("center").style.display = "none";
        const a = document.getElementById("link");
        a.href = "https://goerli.etherscan.io/tx/${txObj.hash}";
        document.getElementById("link").style.display = "block";
    });
};

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("check_balance").addEventListener("click",check_balance);
});

function check_balance(){
    document.getElementById("center").style.display = "flex";

    const provider = new ethers.providers.JsonRpcProvider("https://eth.getblock.io/a4c5ac6c-5bcd-4f40-82a3-f9b402cbd1d7/goerli/");

    const signer = provider.getSigner();

    console.log("signer");
    const address = document.getElementById("address").value;
    provider.getBalance(address).then((balance) => {
        const balanceEth = ethers.utils.formatEther(balance);

        console.log("balance",check_balance);
        document.getElementById("check_balance").innerText = "balance: "+balanceEth+" ETH";
        document.getElementById("center").style.display = "none";
        

    });
 
}

