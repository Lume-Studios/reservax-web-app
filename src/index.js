import ABI from './contract/ABI.json'

const connectButton = document.querySelector('.is--connect-wallet')
const connectedTo = document.querySelector('.connected-to')
const carteiraWrapper = document.querySelector('.carteira-wrapper')
const supplyMax = Array.from(document.getElementsByClassName('supply-max'))
const supplyTotal = Array.from(document.getElementsByClassName('supply-total'))
const sumButtons = Array.from(document.getElementsByClassName('is-right'))
const minusButtons = Array.from(document.getElementsByClassName('is-left'))
const mintButtons = Array.from(document.getElementsByClassName('is--collection-card'))
const quantity = Array.from(document.getElementsByClassName('quantity-text'))
const videos = Array.from(document.getElementsByClassName('collection__card-video'))
const loadingWrapper = Array.from(document.getElementsByClassName('loading-wrapper'))
const openseaLink = Array.from(document.getElementsByClassName('link_opensea'))
const toolTipText = Array.from(document.getElementsByClassName('tooltiptext'))
const toolTipWrapper = Array.from(document.getElementsByClassName('tooltip-wrapper'))
const popUpBgWrapper = document.querySelector('.pop-up__bg-wrapper')
const popUpWrapper = document.querySelector('.pop-up__wrapper')
const knowMoreButtons = Array.from(document.getElementsByClassName('know_more-button'))
const closePopUp = document.querySelector('.pop-up__close-icon')

const web3 = new Web3(Web3.givenProvider);

const contract = new web3.eth.Contract(ABI, process.env.CONTRACT_ADDRESS);

const verifyWallet = async (address, projectId, i) => {
    try {
        const response = await axios.get(process.env.SERVER + 'users/verify', { params: { address, projectId } });

        return response;
    } catch (error) {
        alert('erro na verify')
        console.log('not whitelisted')
        loadingWrapper[i].classList.add('is-hidden')
        toolTipWrapper[i].classList.remove('is-hidden')
        mintButtons[i].classList.remove('is-hidden')
    }

}

const connectWallet = async function () {
    const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
    });

    if (accounts.length > 0) {
        connectedTo.innerText = 'Carteira: ' + accounts[0].substring(0, 5) + '...' + accounts[0].substring(accounts[0].length - 4, accounts[0].length)
        carteiraWrapper.classList.remove('is-hidden')
        connectButton.classList.add('is-hidden')

        supplyTotal.forEach((text, i) => {
            contract.methods.totalSupply(i).call().then((total) => {
                supplyTotal[i].innerText = total;
                minusButtons[i].classList.remove('is-disabled')
                if (+supplyTotal[i].innerText < process.env.MAX_SUPPLY) {
                    sumButtons[i].classList.remove('is-disabled')
                    mintButtons[i].classList.remove('is-disabled')
                }
            })
        })

        supplyMax.forEach((text, i) => {
            contract.methods.maxSupplyEach(i).call().then((max) => {
                supplyMax[i].innerText = '/ ' + max;
            })
        })
    }
}

sumButtons.forEach((button, i) => button.onclick = () => {
    if (+quantity[i].innerText < MAX_MINTS_PER_USER) {
        quantity[i].innerText++;
    }
})

minusButtons.forEach((button, i) => button.onclick = () => {
    if (+quantity[i].innerText > 1) {
        quantity[i].innerText--;
    }
})

knowMoreButtons.forEach((button) => button.onclick = () => {
    popUpBgWrapper.classList.remove('is-hidden')
    popUpWrapper.classList.remove('is-hidden')
})

mintButtons.forEach((button, i) => button.onclick = async (e) => {
    e.preventDefault();
    mintButtons[i].classList.add('is-hidden')
    loadingWrapper[i].classList.remove('is-hidden')
    toolTipWrapper[i].classList.add('is-hidden')
    try {
        const accounts = await window.ethereum.request({
            method: 'eth_accounts',
        });
        if (accounts.length > 0) {
            if (!IS_PRE_SALE) {
                let totalCost = Number(process.env.COST) * parseInt(quantity[i].innerText)

                if (accounts.length > 0) {
                    contract.methods.publicPurchase(quantity[i].innerText, i).send({
                        from: accounts[0],
                        to: CONTRACT_ADDRESS,
                        value: String(totalCost),
                    }).then(mint => {
                        toolTipWrapper[i].classList.add('is-hidden')
                        loadingWrapper[i].classList.add('is-hidden')
                        openseaLink[i].classList.remove('is-hidden')
                    }).catch(error => {
                        alert(Object.entries(error))
                        mintButtons[i].classList.remove('is-hidden')
                        loadingWrapper[i].classList.add('is-hidden')
                        toolTipWrapper[i].classList.remove('is-hidden')
                        toolTipText[i].classList.remove('is-active')
                        toolTipText[i].classList.add('is-hidden')
                    })
                }
            } else {
                const accounts = await window.ethereum.request({
                    method: 'eth_accounts',
                });

                let totalCost = Number(COST) * parseInt(quantity[i].innerText)

                const response = await verifyWallet(accounts[0], PROJECT_ID, i)
                if (response) {
                    const { v, r, s } = response.data

                    contract.methods.earlyPurchase(quantity[i].innerText, i, v, r, s).send({
                        from: accounts[0],
                        to: CONTRACT_ADDRESS,
                        value: String(totalCost),
                    }).then(mint => {
                        alert(Object.entries(error))
                        loadingWrapper[i].classList.add('is-hidden')
                        openseaLink[i].classList.remove('is-hidden')
                    }).catch(error => {
                        alert('erro na funcao  pre salemint')
                        mintButtons[i].classList.remove('is-hidden')
                        loadingWrapper[i].classList.add('is-hidden')
                        toolTipWrapper[i].classList.remove('is-hidden')
                        toolTipText[i].classList.remove('is-active')
                        toolTipText[i].classList.add('is-hidden')
                    })
                }
            }
        } else {
            toolTipWrapper[i].classList.remove('is-hidden')
            loadingWrapper[i].classList.add('is-hidden')
            mintButtons[i].classList.remove('is-hidden')
            toolTipText[i].classList.add('is-active')
        }
    } catch (error) {
        toolTipWrapper[i].classList.remove('is-hidden')
        loadingWrapper[i].classList.add('is-hidden')
        mintButtons[i].classList.remove('is-hidden')
        toolTipText[i].classList.add('is-active')
    }
})

connectButton.addEventListener('click', connectWallet);

closePopUpEvent = async () => {
    popUpBgWrapper.classList.add('is-hidden')
    popUpWrapper.classList.add('is-hidden')
}

closePopUp.addEventListener('click', closePopUpEvent)
popUpBgWrapper.addEventListener('click', closePopUpEvent)
popUpWrapper.addEventListener('click', closePopUpEvent)

if (!window.ethereum) {
    connectedTo.innerText = 'Por favor, instale a Metamask'
    carteiraWrapper.classList.remove('is-hidden')
    connectButton.classList.add('is-hidden')
}

ethereum.on('chainChanged', handleChainChanged);

function handleChainChanged(_chainId) {
    if (_chainId !== process.env.CHAIN_ID) {
        connectButton.classList.add('is-hidden')
        carteiraWrapper.classList.remove('is-hidden')
        connectedTo.innerText = 'Por favor, conecte-se à Mainnet!'
    } else {
        window.location.reload();
    }

}

ethereum.on('accountsChanged', handleAccountChanged);

function handleAccountChanged(_account) {
    if (connectedTo.innerText !== '') {
        window.location.reload();
    }
}

videos.forEach((video, i) => {
    video.children[0].removeAttribute("autoplay");
    video.children[0].addEventListener("canplay", function () {
        setTimeout(function () {
            video.children[0].play();
        }, 400 + i * 400);
    })
})