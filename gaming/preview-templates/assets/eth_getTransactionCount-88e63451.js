import{d as n,am as r}from"./index-6273e60d.js";async function u(t,o){const e=await t({method:"eth_getTransactionCount",params:[o.address,o.blockNumber?n(o.blockNumber):o.blockTag||"pending"]});return r(e)}export{u as eth_getTransactionCount};