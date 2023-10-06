
/*Funcionamento do botão dark mode*/

function darkMode() {
    var body = document.body; 
    var menu1 = document.getElementById("btn-dropdown");
    var menu2 = document.getElementById("btn-layout");
    body.classList.toggle("dark-mode");
    menu1.classList.toggle("menu-dark-mode");
    menu2.classList.toggle("menu-dark-mode");
}

/*Funcionamento de menu dropdown*/

function dropdownMenu() {
    var dropdown = document.querySelector("#dropdown-menu");
    dropdown.classList.toggle("aparecer-menu");
}

/*Aparecimento do botão 'voltar ao topo'*/

const btnUp = document.querySelector("#btn-up");
function aparecerUp() {
    btnUp.classList.add("aparecer-up");
}
function sumirUp() {
    btnUp.classList.remove("aparecer-up");
}
window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (scrolled > 200){
        aparecerUp();
    }else{
        sumirUp();
    };
})


/*Funcionamento dos sliders*/

let cartaoAtual = 0;

/*Slider cursos*/

const cartoes1 = document.querySelectorAll(".cartao1");

//Tirar classe
function esconderCartaoSelecionado1(){
    const cartaoSelecionado1 = document.querySelector(".selecionado1");
    cartaoSelecionado1.classList.remove("selecionado1");
}

//Adicionar classe
function mostarCartao1(indiceCartao){
    cartoes1[indiceCartao].classList.add("selecionado1");
}

//Avançar
function next1() {
    const btnAvancar1 = document.querySelector(".avancar-curso");
    if (cartaoAtual == cartoes1.length - 1) {
        cartaoAtual = -1
    };
    esconderCartaoSelecionado1();
    cartaoAtual++;
    mostarCartao1(cartaoAtual);
}

//Voltar
function back1() {
    const btnVoltar1 = document.querySelector(".voltar-curso");
    if (cartaoAtual == 0) {
        cartaoAtual = cartoes1.length
    };
    esconderCartaoSelecionado1();
    cartaoAtual--
    mostarCartao1(cartaoAtual);
}

/*Slider projetos*/

const cartoes2 = document.querySelectorAll(".cartao2");

//Tirar classe
function esconderCartaoSelecionado2(){
    const cartaoSelecionado2 = document.querySelector(".selecionado2");
    cartaoSelecionado2.classList.remove("selecionado2");
}

//Adicionar classe
function mostarCartao2(indiceCartao){
    cartoes2[indiceCartao].classList.add("selecionado2");
}

//Avançar
function next2() {
    const btnAvancar2 = document.querySelector(".avancar-curso");
    if (cartaoAtual == cartoes2.length - 1) {
        cartaoAtual = -1
    };
    esconderCartaoSelecionado2();
    cartaoAtual++;
    mostarCartao2(cartaoAtual);
}

//Voltar
function back2() {
    const btnVoltar2 = document.querySelector(".voltar-curso");
    if (cartaoAtual == 0) {
        cartaoAtual = cartoes2.length
    };
    esconderCartaoSelecionado2();
    cartaoAtual--
    mostarCartao2(cartaoAtual);
}