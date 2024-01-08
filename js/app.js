let estadoCelular = "apagado"

/*sonidos*/
const sonidoFunny = document.querySelector("#sonido_funny");
const sonidoCelular = document.querySelector("#celular_click")

/*divs*/

const dog = document.querySelector("#dog")
const boton = document.querySelector("#boton_celular")


function sonidoPantalla(){
    if(sonidoFunny.paused){
        sonidoCelular.play()
        sonidoFunny.play()
    }else{
        sonidoCelular.play()
        sonidoFunny.pause();
        sonidoFunny.currentTime=0;
    }

}


boton.addEventListener("click", ()=>{
    controlarCelular();
})




function controlarCelular(){
        if(estadoCelular=="apagado"){
            estadoCelular = "encendido"
            sonidoPantalla()
            dog.classList.add("dog_activo")
        }else{
            estadoCelular= "apagado";
            sonidoPantalla()
            dog.classList.remove("dog_activo")
        }    
    
    }




