const [input1, input2] = document.querySelectorAll("input");
const botao = document.querySelector("button");

function logar(){
    if(input1.value && input2.value.length >= 8){
        botao.removeAttribute("disabled");
        botao.classList.add("ativo");
    }else{
        botao.classList.remove("ativo")
        botao.setAttribute("disabled", "disabled");
    }
}

input1.addEventListener("input", logar);
input2.addEventListener("input", logar);
