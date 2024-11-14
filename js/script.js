const alvo=document.querySelector('#alvo') 
const btneymar=document.querySelector('#btneymar')
const btmessi=document.querySelector('#btmessi')
const btcr7=document.querySelector('#btcr7')


btneymar.addEventListener('click',neymar)
btmessi.addEventListener('click',messi)
btcr7.addEventListener('click',cr7)


function neymar(){
alvo.src='imagem/cropped-neymar-arabia-saudita-scaled-1-356x474.jpg'


}

function messi(){
alvo.src='imagem/whatsapp-image-2022-11-26-at-20.20.59.webp'

}


function cr7(){

alvo.src='imagem/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis,_September_2023_(cropped).jpg'

}