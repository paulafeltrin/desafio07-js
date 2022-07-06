const [input1, input2] = document.querySelectorAll("input");
const botao = document.querySelector(".button");
//const imagem = document.querySelector(".img-lol");

function logar(){
    if(input1.value && input2.value.length >= 8){
        botao.removeAttribute("disabled");
        botao.classList.add("ativo");
    }else{
        botao.setAttribute("disabled", "disabled");
        //imagem.classList.remove("ativo");
    }
}

input1.addEventListener("input", logar);
input2.addEventListener("input", logar);


//bonus
// function corDeFundo(event){
//     if(event.key === 'v' || event.key === "V"){
//         document.body.classList.toggle("fundo"); //TOGGLE -> adiciona e remove
//     }
    
// }

// window.addEventListener("keydown", corDeFundo);