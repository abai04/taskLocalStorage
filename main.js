let name = document.querySelector("#name")
let number = document.querySelector("#number")
let password = document.querySelector("#password")
let check = document.querySelector("#checkpassword")
let button = document.querySelector("button")
console.log(name.value);

let n = Number("12122")

button.addEventListener("click", ()=>{
    if(name.value === ""){
        alert("fill the name field")
        return
    }
    if(number.value === ""){
        alert("fill the number field")
        return
    }
    if(isNaN(Number(number.value))){
        alert("wrong input in number field")
        return
    }
    if(password.value === ""){
        alert("fill the password field")
        return
    }
    if(password.value.length < 8){
        alert("password needs to have at least 8 letters")
    }
    if (check.value === "") {
        alert("fill the check password field")
        return
    }
    if(check.value != password.value){
        alert("wrong input in check password")
        return
    }
    localStorage.setItem("user", JSON.stringify([name.value, number.value, password.value]))
})
