import{aa as c,_ as d}from"./index-be9e3908.js";import{p as r,f as o}from"./parseNft-5a3048e5.js";const k="0xc87b56dd",i=[{type:"uint256",name:"_tokenId"}],u=[{type:"string"}];async function I(t){return c({contract:t.contract,method:[k,i,u],params:[t.tokenId]})}async function m(t){const[e,n]=await Promise.all([I(t).catch(()=>null),t.includeOwner?d(()=>import("./ownerOf-09aaae31.js"),["assets/ownerOf-09aaae31.js","assets/index-be9e3908.js","assets/index-db695948.css"]).then(a=>a.ownerOf(t)).catch(()=>null):null]);return e?r(await o({client:t.contract.client,tokenId:t.tokenId,tokenUri:e}).catch(()=>({id:t.tokenId,type:"ERC721",uri:e})),{tokenId:t.tokenId,tokenUri:e,type:"ERC721",owner:n}):r({id:t.tokenId,type:"ERC721",uri:""},{tokenId:t.tokenId,tokenUri:"",type:"ERC721",owner:n})}export{m as getNFT};