alert("Buenas estas ingresando a la pagina para ver un contador de numeros")

let span = document.querySelector("#span");
let contador = 0
let container = document.querySelector("container");

container = addEventListener ("click" , (e) =>{
    console.log(e.target.classList.contains("btn-info"));

    if (e.target.classList.contains("btn-info")){
        contador++;
        span.textContent = contador;
    }

    if (e.target.classList.contains("btn-danger")){
        contador--;
        span.textContent = contador;
    }
})

let btn = document.querySelector(".btn-dark");
let bgSuccess = document.querySelector(".bg-success")
btn.addEventListener ("click" , (e) =>{
    e.stopPropagation();
    console.log("Click boton")})


bgSuccess.addEventListener ("click" , () =>{
  
    console.log("Click fondo verde")})
 
let btnSaludar = document.querySelector(".btn-dark");
btnSaludar.addEventListener("click", () =>{
     alert("Gracias por usar el contador");
});
    