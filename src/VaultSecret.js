// Azure authentication library to access Azure Key Vault
const { DefaultAzureCredential} = require("@azure/identity")
const { SecretClient } = require("@azure/keyvault-secrets")
require('dotenv').config({path: '../.env'})

const getSecret =  async () =>{
  try{
    // Azure SDK clients accept the credential as a parameter
    const credential = new DefaultAzureCredential();
    const client = new SecretClient(process.env.KEY_VAULT_URI, credential)
    const secret =  await  client.getSecret(process.env.SECRET_NAME)
    const value = secret.value
    console.log(value)
    return value
  }catch(err){
    console.log(err)
  }
}
getSecret()
module.exports ={
  getSecret
}
