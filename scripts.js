let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")

botaoSom.addEventListener("click", ligaSom) //p chamar uma function geralmente colocamos o nome e "()", mas nesse caso nao é preciso

function ligaSom(){
    video.muted = !video.muted
}//na programação o "!" significa Inverso, ou seja inverte tudo
//ou seja, se estiver como verdadeiro fica falso, e se estiver como falso fica verdadeiro

botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)

function mostrarModal(){
    modal.style.display = "block"
}

function esconderModal(){
    modal.style.display = "none"
}


window.addEventListener("load", tocarAudio)// esse 'load', é para sempre que a tela carregar ele ativa a function

function tocarAudio(){
    audio.play() //o play() toca o audio
}