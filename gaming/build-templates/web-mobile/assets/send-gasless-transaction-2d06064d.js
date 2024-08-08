import{_}from"./index-be9e3908.js";async function p({account:n,transaction:t,serializableTransaction:o,gasless:r}){if(o.value&&o.value>0n)throw new Error("Gasless transactions cannot have a value");if(r.provider==="biconomy"){const{relayBiconomyTransaction:e}=await _(()=>import("./biconomy-3637c0a0.js"),["assets/biconomy-3637c0a0.js","assets/index-be9e3908.js","assets/index-db695948.css"]);return e({account:n,transaction:t,serializableTransaction:o,gasless:r})}if(r.provider==="openzeppelin"){const{relayOpenZeppelinTransaction:e}=await _(()=>import("./openzeppelin-b119c796.js"),["assets/openzeppelin-b119c796.js","assets/index-be9e3908.js","assets/index-db695948.css"]);return e({account:n,transaction:t,serializableTransaction:o,gasless:r})}if(r.provider==="engine"){const{relayEngineTransaction:e}=await _(()=>import("./engine-9f58e2d6.js"),["assets/engine-9f58e2d6.js","assets/index-be9e3908.js","assets/index-db695948.css"]);return e({account:n,transaction:t,serializableTransaction:o,gasless:r})}throw new Error("Unsupported gasless provider")}export{p as sendGaslessTransaction};