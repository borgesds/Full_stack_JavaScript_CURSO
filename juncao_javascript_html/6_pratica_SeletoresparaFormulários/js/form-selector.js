function showInfo() {
    let name = document.querySelector("input[name='name']").value
    let favoriteColor = document.querySelector("select[name='color'] option:checked").text
    let likeProgramming = document.querySelector("input[name='like-programming']:checked").value
    let devOptions = document.querySelectorAll("input[name='developer-options']:checked")
    let optionsValues = []
    devOptions.forEach(element => {optionsValues.push(element.value)})
    let optionsChecked = optionsValues.join(", ")
    alert(  "Nome: " + name + "\nCor Primaria: " + favoriteColor + "\nGosta de programar? " + likeProgramming + 
            "\nConhecimento em programação web:\n " + optionsChecked)
}