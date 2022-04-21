class App {
    addProperty() {
        event.preventDefault()
        let kind = document.querySelector("select[name='kind']").value
        let area = document.querySelector("input[name='area']").value
        let rented = document.querySelector("input[name='rented']").checked
        let property = new Property(kind, area, rented)
        this.addOnPropertiesList(property)
        this.clearForm()
    }

    addOnPropertiesList(property) {
        let listElement = document.createElement("li")
        let propertyInfo = " Tipo: " + property.kind + " | Área: " + property.area + "m² |     "
        if(property.rented) {
            let rentedMark = this.createRenteMark()
            listElement.appendChild(rentedMark)
        }
        listElement.innerHTML += propertyInfo
        let buttonToRemove = this.createRemoveButton()
        listElement.appendChild(buttonToRemove)
        document.getElementById("properties").appendChild(listElement)
    }

    createRenteMark() {
        let rentedMark = document.createElement("span")
        rentedMark.style.color = "white"
        rentedMark.style.backgroundColor = "red"
        rentedMark.innerText = "ALUGADO"
        return rentedMark
    }

    createRemoveButton() {
        let buttonToRemove = document.createElement("button")
        buttonToRemove.setAttribute("onclick", "app.remove()")
        buttonToRemove.innerText ="Remover"
        return buttonToRemove
    }

    clearForm() {
        document.querySelector("input[name='area']").value = ""
        document.querySelector("input[name='rented']").checked = false
    }

    remove() {
        let liToRemove = event.target.parentNode //Pegar  o elemento que vc quer remover (event.target = buscar o botão) & o "li" é o evento pai(.parentNode)
        document.getElementById("properties").removeChild(liToRemove)
    }
}