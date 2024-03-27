# Quickstart

## Getting started

1. Install packages

```cmd
npm install
```

2. Start dev environment

```cmd
npm run dev
```

This will start a gateway at [127.0.0.1:8080](http://127.0.0.1:8080) which will render your local widgets. The entry point for this app is [every.near/widget/app](http://127.0.0.1:8080/every.near/widget/app)


## Setting up the workflows

For testnet, I used near-cli-rs

`near account create-account sponsor-by-faucet-service [ACCOUNT_ID] autogenerate-new-keypair save-to-keychain network-config testnet create`

`near account export-account [ACCOUNT_ID] using-private-key network-config testnet`

For mainnet, I had an existing NEAR account and have a seedphrase.

`near account import-account using-seed-phrase '[SEED_PHRASE]' --seed-phrase-hd-path 'm/44'\''/397'\''/0'\''' network-config mainnet`

Then 

`near account export-account [ACCOUNT_ID] using-private-key network-config mainnet`
