let ul = document.querySelector("ul")
let btnSave = document.querySelector("#save")
let btnLoad = document.querySelector("#load")
let btnClean = document.querySelector("#clean")
let inpName = document.querySelector("#name")
console.log(localStorage);
btnSave.addEventListener("click", () => {
    if (!inpName.value.trim()) {
        alert("fill the field!!!")
        return
    }
    let newUser = {
        name: inpName.value
    }
    setNameToLocalStorage(newUser)
    inpName.value = ""
})
btnLoad.addEventListener("click", createList)
btnClean.addEventListener("click", () => {
    localStorage.clear()
})

function setNameToLocalStorage(name) {
    if (!localStorage.getItem("user")) {
        localStorage.setItem("user", JSON.stringify([]))
    }
    let data = JSON.parse(localStorage.getItem("user"))
    data.push(name)
    localStorage.setItem("user", JSON.stringify(data))
}

function createList() {
    let data = JSON.parse(localStorage.getItem("user"))
    
    if(!localStorage){
        alert("storage is empty")
        return
    }
    ul.innerHTML = ""
    data.forEach((el, i) => {
        let li = document.createElement("li")
        li.innerText = el.name
        ul.append(li)
    });
}