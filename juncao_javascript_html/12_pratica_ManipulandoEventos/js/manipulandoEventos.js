function doChange() {
    alert(window.event.target.value)
}

/** Dentro do console:
 * 
 * let sampleInput = document.querySelector("input[name='sample-input']")
 * 
 * sampleInput.addEventListener("change", doChange)
 * 
 * let changeEvent = new Event("change")
 * 
 * chamar o evento:
 * 
 * sampleInput.dispatchEvent(changeEvent)
 * 
 * Remover um evento mapeado:
 * 
 * sampleInput.removeEventListener("change", doChange)
 * 
 */