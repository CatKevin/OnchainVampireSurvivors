import{_}from"./index-6d7f0bcb.js";async function p({account:n,transaction:t,serializableTransaction:o,gasless:r}){if(o.value&&o.value>0n)throw new Error("Gasless transactions cannot have a value");if(r.provider==="biconomy"){const{relayBiconomyTransaction:e}=await _(()=>import("./biconomy-7e40bc7a.js"),["assets/biconomy-7e40bc7a.js","assets/index-6d7f0bcb.js","assets/index-db695948.css"]);return e({account:n,transaction:t,serializableTransaction:o,gasless:r})}if(r.provider==="openzeppelin"){const{relayOpenZeppelinTransaction:e}=await _(()=>import("./openzeppelin-91f88002.js"),["assets/openzeppelin-91f88002.js","assets/index-6d7f0bcb.js","assets/index-db695948.css"]);return e({account:n,transaction:t,serializableTransaction:o,gasless:r})}if(r.provider==="engine"){const{relayEngineTransaction:e}=await _(()=>import("./engine-73275ae0.js"),["assets/engine-73275ae0.js","assets/index-6d7f0bcb.js","assets/index-db695948.css"]);return e({account:n,transaction:t,serializableTransaction:o,gasless:r})}throw new Error("Unsupported gasless provider")}export{p as sendGaslessTransaction};