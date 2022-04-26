const presets = [
    [
        "@babel/preset-env",
        {
            useBuiltIns: "usage", //procura o que deve ser trocado de uma versão para outra
            corejs: "3.22.2" //versão
        }
    ]
]

module.exports = {presets}

//npx babel src --out-dir dist (No terminal digita so esse comando e ele puxa o arquivo babel.config.js)

//npm install core-js@3 --save (Instalar a versão ES3)