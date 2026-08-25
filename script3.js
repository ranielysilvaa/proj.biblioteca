let olho = document.getElementById("btn-olho")
let senha = document.getElementById("senha")
let visivel = false

olho.addEventListener("clik",()=>{
    if(visivel == false){
        olho.scr="aberto.png"
        senha.type="text"
        visivel = true
    } else {
        olho.scr="fechado.png"
        senha.type="password"
        visivel = false
    }
    
})