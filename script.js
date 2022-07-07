const [input1, input2] = document.querySelectorAll("input");
const botao = document.querySelector("button");

function logar(){
    if(input1.value && input2.value.length >= 8){
        botao.removeAttribute("disabled");
        botao.classList.toggle("ativo");
    }else{
        botao.setAttribute("disabled", "disabled");
    }
}

input1.addEventListener("input", logar);
input2.addEventListener("input", logar);


// const [input1, input2] = document.querySelectorAll("input");
// const imagem = document.querySelector(".img-lol");
// const botao = document.querySelector("button");
// function mudanca(){
//     if(input1.value && input2.value.length >= 8){
//         botao.removeAttribute("disabled");
//         imagem.classList.add("ativo");
//     }else{
//         botao.setAttribute("disabled", "disabled");
//         imagem.classList.remove("ativo");
//     }
// }
// input1.addEventListener("input", mudanca);
// input2.addEventListener("input", mudanca);

// //bonus
// function corDeFundo(event){
//     if(event.key === 'v' || event.key === "V"){
//         document.body.classList.toggle("fundo"); //TOGGLE -> adiciona e remove
//     }
    
// }

// window.addEventListener("keydown", corDeFundo);