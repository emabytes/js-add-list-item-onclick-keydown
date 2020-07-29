let userinput = document.querySelector("#userinput")
let li = document.createElement("li")
let ul = document.querySelector("ul");

let button = document.querySelector("#enter");
button.addEventListener("click", function submit() {
    let text = document.createTextNode(`${userinput.value}`)
    document.querySelector("div").appendChild(ul).appendChild(li).appendChild(text)
})

userinput.addEventListener("keydown", function enter() {
    if (event.which === 13 || event.keyCode === 13 || event.key === "Enter") {
        let text = document.createTextNode(`${userinput.value}`)
        document.querySelector("div").appendChild(ul).appendChild(li).appendChild(text)
    }
})

