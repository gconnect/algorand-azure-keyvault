# Using Azure Key Vault for Algorand Wallet Transactions using JavaScript

Azure Key Vault is a cloud service that provides a secure store for secrets. You can securely store keys, passwords, certificates, and other secrets. Azure key vaults may be created and managed through the Azure portal. In this tutorial, you create a key vault, then use it to store a secret and retrieve the secret to sign transactions on Algorand.

# Setup Instructions

- Create free or paid azure account
<img width="1431" alt="Screenshot 2022-03-25 at 05 49 52" src="https://user-images.githubusercontent.com/23031920/160219924-0d806b07-7253-4c5e-8fbf-a977db902b45.png">

- Login in to the portal
<img width="1428" alt="Screenshot 2022-03-25 at 05 49 23" src="https://user-images.githubusercontent.com/23031920/160219922-25818f3c-8dfb-4b32-84ab-fec3213d9d15.png">

- Search for Key Vault
<img width="1440" alt="Screenshot 2022-03-17 at 02 54 16" src="https://user-images.githubusercontent.com/23031920/160220011-57838131-cddd-42d4-b352-0899319d67cb.png">

- Create Key Vault
<img width="1440" alt="Screenshot 2022-03-17 at 03 24 46" src="https://user-images.githubusercontent.com/23031920/160220018-cbad2fa9-324f-421a-912a-c0b7169a53e2.png">

- Select and create secret
<img width="1440" alt="Screenshot 2022-03-18 at 01 41 43" src="https://user-images.githubusercontent.com/23031920/160220094-716f6e87-2459-43fd-ba13-be410de512c9.png">


# Code Structure
- `src/Transaction.js` The code here handles connecting to the Algorand Purestake API client, creating a payment transaction, Signing the transaction with secret from Azure KeyVault.
- `src/VaultSecret.js` This handles connecting to the azure identity and secret client and making a request to get the secret.
- `src/RecoverAccount.js` This handles recovering of Algorand wallet using the secret from Azure KeyVault

NOTE
Create `.env` file at the root of your project to store sensitive information. Your `.env` file should look like this
```
API_KEY = YOUR API KEY
KEY_VAULT_URI = YOUR KEY VAULT URI
SECRET_NAME = YOUR SECRET NAME
```

# Dependencies
To install required dependencies do
`npm install`

# Run Code
`node Transaction.js`

# License
Distributed under the MIT License. See for more information. [LICENSE](https://github.com/gconnect/algorand-azure-keyvault/blob/master/LICENSE)

# Blog and Video Tutorial
For more detailed step by step guide checkout the blog post [here](https://developer.algorand.org/tutorials/using-azure-keyvault-for-wallet-transactions/). And here is the link to the youtube [demo](https://www.youtube.com/watch?v=qS82oYclYY0)

# Disclaimer
This project is not audited and should not be used in a production environment.
