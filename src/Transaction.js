const vault = require('./VaultSecret') 
const algosdk = require('algosdk')
require('dotenv').config({path: '../.env'})

  async function paymentTransaction() {
    const mnomenic = await vault.getSecret()
    const account = algosdk.mnemonicToSecretKey(mnomenic)
    const senderAddress = account.addr
    
    try {
        // Connect your client
        const algodToken = {"X-API-Key": process.env.API_KEY}
        const algodServer = process.env.ALGOD_SERVER
        const algodPort = process.env.PORT
        let algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
  
        //Check your balance
        let accountInfo = await algodClient.accountInformation(senderAddress).do();
        console.log("Account balance: %d microAlgos", accountInfo.amount);
  
        // Construct the transaction
        let params = await algodClient.getTransactionParams().do();
        // comment out the next two lines to use suggested fee
        params.fee = algosdk.ALGORAND_MIN_TX_FEE;
        params.flatFee = true;
  
        // receiver defined as TestNet faucet address 
        const receiver = "HZ57J3K46JIJXILONBBZOHX6BKPXEM2VVXNRFSUED6DKFD5ZD24PMJ3MVA";
        const enc = new TextEncoder();
        const note = enc.encode("Hello World");
        let amount = 1000000;
        let sender = senderAddress;
        let txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
            from: sender, 
            to: receiver, 
            amount: amount, 
            note: note, 
            suggestedParams: params
        });
  
  
        // Sign the transaction
        let signedTxn = txn.signTxn(account.sk);
        let txId = txn.txID().toString();
        console.log("Signed transaction with txID: %s", txId);
  
        // Submit the transaction
        await algodClient.sendRawTransaction(signedTxn).do();
  
        // Wait for confirmation
        let confirmedTxn = await algosdk.waitForConfirmation(algodClient, txId, 4);
        //Get the completed Transaction
        console.log("Transaction " + txId + " confirmed in round " + confirmedTxn["confirmed-round"]);
        let string = new TextDecoder().decode(confirmedTxn.txn.txn.note);
        console.log("Note field: ", string);
        accountInfo = await algodClient.accountInformation(senderAddress).do();
        console.log("Transaction Amount: %d microAlgos", confirmedTxn.txn.txn.amt);        
        console.log("Transaction Fee: %d microAlgos", confirmedTxn.txn.txn.fee);
        console.log("Account balance: %d microAlgos", accountInfo.amount);
    }
    catch (err) {
        console.log("err", err);
    }  
  };
  paymentTransaction()
