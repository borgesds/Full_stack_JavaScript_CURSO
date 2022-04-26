"use strict";

//npm init -y
//npm install @babel/core @babel/cli @babel/preset-env --save-dev
function testingES8(text1, text2) {
  alert("".concat(text1, " ").concat(text2));
} //npx babel testinges8.js (Para converter)
// npx babel testinges8.js -o compiled-script.js (Salvar as alterações em outro arquivo)
//npx babel testinges8.js -o compiled-script2.js --presets=@babel/preset-env (Salvar em um extensão especifica = S5)
