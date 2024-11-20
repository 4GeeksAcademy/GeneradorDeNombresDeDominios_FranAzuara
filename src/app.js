/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let resultados = [];
  let extensión = ".com";

  for (let i = 0; i < pronoun.length; i++) {
    pronoun[i];
    for (let j = 0; j < adj.length; j++) {
      adj[j];
      for (let k = 0; k < noun.length; k++) {
        noun[k];
        console.log(pronoun[i] + adj[j] + noun[k]);
        resultados.push(pronoun[i] + adj[j] + noun[k] + extensión);
      }
    }
  }
  console.log(resultados);

  let resultadofinal = document.getElementById("resultado");

  for (let l = 0; l < resultados.length; l++) {
    let dominio = resultados[l];
    let lista = document.createElement("li");
    lista.innerText = dominio;
    resultadofinal.appendChild(lista);
  }

  //let resultadofinal = document.getElementById("resultado");
  //console.log(resultadofinal);
  //resultadofinal.innerHTML = "";
  //write your code here
  console.log("Hello Rigo from the console!");
};
