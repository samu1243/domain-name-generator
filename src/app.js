/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let exten = [".net", ".com", ".org", ".us"];
let element = document.getElementById("domain");

let resultadoFinal = "";

//write your code here
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let o = 0; o < exten.length; o++) {
        let resultado = `<br>${pronoun[i]}${adj[j]}${noun[k]}${exten[o]}`;
        resultadoFinal += resultado;
        element.innerHTML = resultadoFinal;
      }
    }
  }
}
