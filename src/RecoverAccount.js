const vault = require('./VaultSecret') 
const algosdk = require('algosdk')

const recoverAccount = async () =>{
  const mnomenic = await vault.getSecret()
  const recover =  algosdk.mnemonicToSecretKey(mnomenic)
  console.log(recover.sk)
}

recoverAccount()