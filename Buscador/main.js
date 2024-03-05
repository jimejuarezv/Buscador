import { lista_componentes } from "./data.js";
let div_root = document.querySelector(".root");

let bloques_principales = `

<h3> Componentes del computador<h3>
<input type= "text">
<div class= "lista_items"></div>
`;

div_root.innerHTML = bloques_principales;

function cargar_items (){
    let div_items = document.querySelector(".lista_items");

     lista_componentes.forEach((elemento)=>{
        let div = document.createElement("div");
        div.classList.add("item");

        div.innerHTML=`
        <img src="${elemento.img} alt="">
        `;
        div_items.appendChild(div);
     });
}
cargar_items();