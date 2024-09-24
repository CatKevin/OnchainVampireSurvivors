
init project:
```
aptos init
```


compile smart contract:
```
aptos move compile --named-addresses hello_blockchain=default
```


publish smart contract:
```
aptos move deploy-object --named-addresses hello_blockchain=default
```