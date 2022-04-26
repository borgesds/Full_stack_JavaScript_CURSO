//npm init -y
//npm install @babel/core @babel/cli @babel/preset-env --save-dev

function testingES8(text1, text2,) {
    alert(`${text1} ${text2}`)
}

let promise = Promise.resolve()

//npx babel testinges8.js (Para converter)
// npx babel testinges8.js -o compiled-script.js (Salvar as alterações em outro arquivo)

//npx babel testinges8.js -o compiled-script2.js --presets=@babel/preset-env (Salvar em um extensão especifica = ES5)

//npx babel src --out-dir dist --presets=@babel/preset-env (Converte e cria todo diretório em um novo)