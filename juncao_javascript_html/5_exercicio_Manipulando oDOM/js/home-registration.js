function saveRegister() {
    let area = document.querySelector("input[name='area']").value
    let number = document.querySelector("input[name='number']").value
    let neighborhood = document.querySelector("input[name= 'neighborhood']").value
    let city = document.querySelector("input[name='city']").value
    let state = document.querySelector("input[name='state']").value

    let newListValue = document.createElement("li")
    newListValue.innerText  = area + " m², número " + number + " (" + neighborhood + " - " + city + " / " + state + ") "

    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")

    newListValue.appendChild(removeButton)

    document.getElementById("house-list").appendChild(newListValue)
}

function removeHouse(button){
    let liToRemove = button.parentNode //Pega tudo que foi adicionado e remove
    document.getElementById("house-list").removeChild(liToRemove)
}