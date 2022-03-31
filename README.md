# Using Azure Key Vault for Algorand Wallet Transactions using JavaScript

Azure Key Vault is a cloud service that provides a secure store for secrets. You can securely store keys, passwords, certificates, and other secrets. Azure key vaults may be created and managed through the Azure portal. In this tutorial, you create a key vault, then use it to store a secret and retrieve the secret to sign transactions on Algorand.

# Setup Instructions

- Create free or paid azure account
<img width="1431" alt="Screenshot 2022-03-25 at 05 49 52" src="https://user-images.githubusercontent.com/23031920/160219924-0d806b07-7253-4c5e-8fbf-a977db902b45.png">

- Login in to the portal
<img width="1428" alt="Screenshot 2022-03-25 at 05 49 23" src="https://user-images.githubusercontent.com/23031920/160219922-25818f3c-8dfb-4b32-84ab-fec3213d9d15.png">
- Create resource group 
<img width="1434" alt="Screenshot 2022-03-31 at 04 03 43" src="https://user-images.githubusercontent.com/23031920/160984100-fba16387-31bf-4f2e-b302-b840508eeb6f.png">
<img width="1440" alt="Screenshot 2022-03-31 at 02 41 00" src="https://user-images.githubusercontent.com/23031920/160984096-8ed9ef74-77fc-4d33-b2c2-ee6110db3cd0.png">
<img width="1440" alt="Screenshot 2022-03-31 at 02 43 20" src="https://user-images.githubusercontent.com/23031920/160984089-e84396fb-e3f3-4491-bb57-b19e982ed93a.png">
- Search for Key Vault
<img width="1440" alt="Screenshot 2022-03-17 at 02 54 16" src="https://user-images.githubusercontent.com/23031920/160220011-57838131-cddd-42d4-b352-0899319d67cb.png">

- Create Key Vault
<img width="1440" alt="Screenshot 2022-03-31 at 02 51 12" src="https://user-images.githubusercontent.com/23031920/160983835-952ca9f1-d5c5-4e4c-bc74-0bd528d54d11.png">

<img width="1431" alt="Screenshot 2022-03-31 at 03 03 23" src="https://user-images.githubusercontent.com/23031920/160983916-a05394c5-e560-4c2e-a14f-331f7d10675d.png">

<img width="1434" alt="Screenshot 2022-03-31 at 03 05 34" src="https://user-images.githubusercontent.com/23031920/160984461-c85b3d7d-d21a-4cde-8406-343964dd37fd.png">
- Select and create secret

<img width="1432" alt="Screenshot 2022-03-31 at 03 06 05" src="https://user-images.githubusercontent.com/23031920/160984016-71856354-6179-4165-8216-3c69ec5a24f6.png">
<img width="1437" alt="Screenshot 2022-03-31 at 03 53 37" src="https://user-images.githubusercontent.com/23031920/160984030-92b076db-9bf9-47c0-bcfc-28ef54698bb7.png">
<img width="1436" alt="Screenshot 2022-03-31 at 03 53 28" src="https://user-images.githubusercontent.com/23031920/160984034-399c313c-8ddc-4298-b4e8-fcae073ac714.png">
<img width="1435" alt="Screenshot 2022-03-31 at 03 56 02" src="https://user-images.githubusercontent.com/23031920/160984041-8912038d-c37b-4601-b1ca-622abaf95cd1.png">


# Code Structure
- `src/Transaction.js` The code here handles connecting to the Algorand Purestake API client, creating a payment transaction, Signing the transaction with secret from Azure KeyVault.
- `src/VaultSecret.js` This handles connecting to the azure identity and secret client and making a request to get the secret.
- `src/RecoverAccount.js` This handles recovering of Algorand wallet using the secret from Azure KeyVault

NOTE
Create `.env` file at the root of your project to store sensitive information. Your `.env` file should look like this. The value should not be quotted.
```
API_KEY = YOUR PURESTAKE API KEY
KEY_VAULT_URI = YOUR KEY VAULT URI
SECRET_NAME =   YOUR SECRET NAME
ALGOD_SERVER = https://testnet-algorand.api.purestake.io/ps2/
PORT = 
```

# Dependencies
To install required dependencies do
`npm install`

# Run Code
!!! NOTE
Ensure you are logged in using the azure cli, to be able to access the secret before running the below code. To login to azure using the cli
do `az login`
- To run the transaction code cd src and then run `node Transaction.js` 
- To run the recovery code cd src run `node RecoverAccount.js` .

# License
Distributed under the MIT License. See for more information. [LICENSE](https://github.com/gconnect/algorand-azure-keyvault/blob/master/LICENSE)

# Blog and Video Tutorial
For more detailed step by step guide checkout the blog post [here](https://developer.algorand.org/tutorials/using-azure-keyvault-for-wallet-transactions/). And here is the link to the youtube [demo](https://www.youtube.com/watch?v=qS82oYclYY0)

# Disclaimer
This project is not audited and should not be used in a production environment.
