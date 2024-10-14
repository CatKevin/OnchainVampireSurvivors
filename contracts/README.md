
init project:
```
aptos init
```


compile smart contract:
```
aptos move compile --named-addresses AptosCodeCollision=0x75b2b8ec560ba8b83b1e66ce0c8b3e74697742ad04feabb1f97d1830c6e826a7
```


publish smart contract:
```
aptos move deploy-object --address-name AptosCodeCollision 
```