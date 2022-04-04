(()=>{"use strict";const e=JSON.parse('[{"inputs":[{"internalType":"string","name":"_uri","type":"string"},{"internalType":"address","name":"_signerRole","type":"address"},{"internalType":"address[]","name":"_addresses","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint8","name":"_v","type":"uint8"},{"internalType":"bytes32","name":"_r","type":"bytes32"},{"internalType":"bytes32","name":"_s","type":"bytes32"}],"name":"earlyPurchase","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint64[]","name":"_newCost","type":"uint64[]"}],"name":"newCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"publicPurchase","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"}],"name":"setAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"setAmounts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_creatorOne","type":"address"},{"internalType":"address","name":"_creatorTwo","type":"address"}],"name":"setCreators","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8[]","name":"_levels","type":"uint8[]"}],"name":"setLevels","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_maxTxEarly","type":"uint8"}],"name":"setMaxEarly","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_maxTxPublic","type":"uint8"}],"name":"setMaxPublic","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8[]","name":"_maxSupplyEach","type":"uint8[]"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newUri","type":"string"}],"name":"setUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_preSaleWindowOpens","type":"uint256"},{"internalType":"uint256","name":"_preSaleWindowCloses","type":"uint256"},{"internalType":"uint256","name":"_publicWindowOpens","type":"uint256"},{"internalType":"uint256","name":"_publicWindowCloses","type":"uint256"}],"name":"setWindows","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"amounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"creatorOne","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"creatorTwo","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"exists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_add","type":"address"},{"internalType":"uint8","name":"_v","type":"uint8"},{"internalType":"bytes32","name":"_r","type":"bytes32"},{"internalType":"bytes32","name":"_s","type":"bytes32"}],"name":"isValidAccessMessage","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"levels","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"maxSupplyEach","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTxEarly","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTxPublic","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"mintPrice","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preSaleWindowCloses","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preSaleWindowOpens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicWindowCloses","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicWindowOpens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"purchaseTxs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"purchaseTxsEarly","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"signerRole","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]'),t=document.querySelector(".is--connect-wallet"),n=document.querySelector(".connected-to"),a=document.querySelector(".carteira-wrapper"),i=Array.from(document.getElementsByClassName("supply-max")),s=Array.from(document.getElementsByClassName("supply-total")),p=Array.from(document.getElementsByClassName("is-right")),r=Array.from(document.getElementsByClassName("is-left")),u=Array.from(document.getElementsByClassName("is--collection-card")),y=Array.from(document.getElementsByClassName("quantity-text")),l=Array.from(document.getElementsByClassName("collection__card-video")),o=Array.from(document.getElementsByClassName("loading-wrapper")),d=Array.from(document.getElementsByClassName("link_opensea")),m=Array.from(document.getElementsByClassName("tooltiptext")),c=Array.from(document.getElementsByClassName("tooltip-wrapper")),T=document.querySelector(".pop-up__bg-wrapper"),b=document.querySelector(".pop-up__wrapper"),f=Array.from(document.getElementsByClassName("know_more-button")),h=document.querySelector(".pop-up__close-icon"),v=new(new Web3(Web3.givenProvider).eth.Contract)(e,"0x15526AF86721E8265139e4F3D759c343aC1d53ce");p.forEach(((e,t)=>e.onclick=()=>{+y[t].innerText<MAX_MINTS_PER_USER&&y[t].innerText++})),r.forEach(((e,t)=>e.onclick=()=>{+y[t].innerText>1&&y[t].innerText--})),f.forEach((e=>e.onclick=()=>{T.classList.remove("is-hidden"),b.classList.remove("is-hidden")})),u.forEach(((e,t)=>e.onclick=async e=>{e.preventDefault(),u[t].classList.add("is-hidden"),o[t].classList.remove("is-hidden"),c[t].classList.add("is-hidden");try{const e=await window.ethereum.request({method:"eth_accounts"});if(e.length>0)if(IS_PRE_SALE){const e=await window.ethereum.request({method:"eth_accounts"});let n=Number(COST)*parseInt(y[t].innerText);const a=await(async(e,t,n)=>{try{return await axios.get("https://reservax.55unity.com/users/verify",{params:{address:e,projectId:t}})}catch(e){alert("erro na verify"),console.log("not whitelisted"),o[n].classList.add("is-hidden"),c[n].classList.remove("is-hidden"),u[n].classList.remove("is-hidden")}})(e[0],PROJECT_ID,t);if(a){const{v:i,r:s,s:p}=a.data;v.methods.earlyPurchase(y[t].innerText,t,i,s,p).send({from:e[0],to:CONTRACT_ADDRESS,value:String(n)}).then((e=>{alert(Object.entries(error)),o[t].classList.add("is-hidden"),d[t].classList.remove("is-hidden")})).catch((e=>{alert("erro na funcao  pre salemint"),u[t].classList.remove("is-hidden"),o[t].classList.add("is-hidden"),c[t].classList.remove("is-hidden"),m[t].classList.remove("is-active"),m[t].classList.add("is-hidden")}))}}else{let n=Number("150000000000000000")*parseInt(y[t].innerText);e.length>0&&v.methods.publicPurchase(y[t].innerText,t).send({from:e[0],to:CONTRACT_ADDRESS,value:String(n)}).then((e=>{c[t].classList.add("is-hidden"),o[t].classList.add("is-hidden"),d[t].classList.remove("is-hidden")})).catch((e=>{alert(Object.entries(e)),u[t].classList.remove("is-hidden"),o[t].classList.add("is-hidden"),c[t].classList.remove("is-hidden"),m[t].classList.remove("is-active"),m[t].classList.add("is-hidden")}))}else c[t].classList.remove("is-hidden"),o[t].classList.add("is-hidden"),u[t].classList.remove("is-hidden"),m[t].classList.add("is-active")}catch(e){c[t].classList.remove("is-hidden"),o[t].classList.add("is-hidden"),u[t].classList.remove("is-hidden"),m[t].classList.add("is-active")}})),t.addEventListener("click",(async function(){const e=await window.ethereum.request({method:"eth_requestAccounts"});e.length>0&&(n.innerText="Carteira: "+e[0].substring(0,5)+"..."+e[0].substring(e[0].length-4,e[0].length),a.classList.remove("is-hidden"),t.classList.add("is-hidden"),s.forEach(((e,t)=>{v.methods.totalSupply(t).call().then((e=>{s[t].innerText=e,r[t].classList.remove("is-disabled"),+s[t].innerText<"81"&&(p[t].classList.remove("is-disabled"),u[t].classList.remove("is-disabled"))}))})),i.forEach(((e,t)=>{v.methods.maxSupplyEach(t).call().then((e=>{i[t].innerText="/ "+e}))})))})),closePopUpEvent=async()=>{T.classList.add("is-hidden"),b.classList.add("is-hidden")},h.addEventListener("click",closePopUpEvent),T.addEventListener("click",closePopUpEvent),b.addEventListener("click",closePopUpEvent),window.ethereum||(n.innerText="Por favor, instale a Metamask",a.classList.remove("is-hidden"),t.classList.add("is-hidden")),ethereum.on("chainChanged",(function(e){"0x1"!==e?(t.classList.add("is-hidden"),a.classList.remove("is-hidden"),n.innerText="Por favor, conecte-se à Mainnet!"):window.location.reload()})),ethereum.on("accountsChanged",(function(e){""!==n.innerText&&window.location.reload()})),l.forEach(((e,t)=>{e.children[0].removeAttribute("autoplay"),e.children[0].addEventListener("canplay",(function(){setTimeout((function(){e.children[0].play()}),400+400*t)}))}))})();