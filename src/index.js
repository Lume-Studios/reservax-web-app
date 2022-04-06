import ABI from './contract/ABI.json'
import axios from 'axios'

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
const errorWrapper = document.querySelector('.error-wrapper')
const errorMessage = document.querySelector('.error-message')


const web3 = new Web3(Web3.givenProvider);

const contract = new web3.eth.Contract(ABI, process.env.CONTRACT_ADDRESS);

const verifyWallet = async (address, projectId, i) => {

    return await axios.get(process.env.SERVER + 'users/verify', { params: { address, projectId } });
}

const setError = (message) => {
    errorMessage.innerText = message
    errorWrapper.classList.remove('is-hidden')
    errorWrapper.classList.add('active-error')
}

const setLoadingForMint = (i) => {
    loadingWrapper[i].classList.remove('is-hidden')
    toolTipWrapper[i].classList.add('is-hidden')
    errorWrapper.classList.remove('active-error')
    errorWrapper.classList.add('is-hidden')
}

const prepareError = (i) => {
    loadingWrapper[i].classList.add('is-hidden')
    toolTipWrapper[i].classList.remove('is-hidden')
    toolTipText[i].classList.remove('is-active')
    toolTipText[i].classList.add('is-hidden')
}

const connectWallet = async function () {
    try {
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
    } catch (err) {
        setError('Houve um erro inesperado!')
    }
}

sumButtons.forEach((button, i) => button.onclick = () => {
    if (+quantity[i].innerText < process.env.MAX_MINTS_PER_USER) {
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

const hasBalance = async (account) => {
    try {
        return await web3.eth.getBalance(account)
    } catch (err) {
        console.log(err)
    }
}

mintButtons.forEach((button, i) => button.onclick = async (e) => {
    e.preventDefault();
    setLoadingForMint(i);
    window.ethereum.request({
        method: 'eth_accounts',
    }).then(accounts => {
        if (accounts.length > 0) {
            hasBalance(accounts[0]).then(balance => {
                if (Number(balance) > 0) {
                    if (!process.env.IS_PRE_SALE) {
                        W
                        let totalCost = Number(process.env.COST) * parseInt(quantity[i].innerText)
                        contract.methods.publicPurchase(quantity[i].innerText, i).send({
                            from: accounts[0],
                            to: process.env.CONTRACT_ADDRESS,
                            value: String(totalCost),
                        }).then(mint => {
                            toolTipWrapper[i].classList.add('is-hidden')
                            loadingWrapper[i].classList.add('is-hidden')
                            openseaLink[i].classList.remove('is-hidden')
                        }).catch(error => {
                            prepareError(i)
                            setError('Houve um erro inesperado!')
                        })

                    } else {
                        window.ethereum.request({
                            method: 'eth_accounts',
                        }).then(accounts => {
                            contract.methods.purchaseTxsEarly(accounts[0]).call().then(amount => {
                                contract.methods.maxTxEarly().call().then(maxAmount => {
                                    if (Number(amount) + quantity[i].innerText > Number(maxAmount)) {
                                        prepareError(i)
                                        setError('Ei, o máximo de mints é dez')
                                        return;
                                    } else {

                                        verifyWallet(accounts[0], process.env.PROJECT_ID, i).then(response => {
                                            if (response) {
                                                const { v, r, s } = response.data

                                                let totalCost = Number(process.env.COST) * parseInt(quantity[i].innerText)
                                                contract.methods.earlyPurchase(quantity[i].innerText, i, v, r, s).send({
                                                    from: accounts[0],
                                                    to: process.env.CONTRACT_ADDRESS,
                                                    value: String(totalCost),
                                                }).then(mint => {
                                                    loadingWrapper[i].classList.add('is-hidden')
                                                    openseaLink[i].classList.remove('is-hidden')
                                                }).catch(error => {
                                                    prepareError(i)
                                                    setError('Houve um erro inesperado!')
                                                })
                                            }
                                        }).catch(error => {
                                            prepareError(i)
                                            setError('Ei, você não tá na Pre-sale')
                                        })
                                    }
                                })
                            })
                        })
                    }
                } else {
                    prepareError(i)
                    setError('Ei, seu saldo é insuficiente!')
                }
            })

        } else {
            toolTipWrapper[i].classList.remove('is-hidden')
            loadingWrapper[i].classList.add('is-hidden')
            mintButtons[i].classList.remove('is-hidden')
            toolTipText[i].classList.add('is-active')
        }
    }).catch(error => {
        setError('Houve um erro inesperado!')
        toolTipWrapper[i].classList.remove('is-hidden')
        loadingWrapper[i].classList.add('is-hidden')
        toolTipText[i].classList.add('is-active')
    })
})

connectButton.addEventListener('click', connectWallet);

const closePopUpEvent = () => {
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

