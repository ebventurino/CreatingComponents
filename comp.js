const fragment = document.createDocumentFragment()

const newComment = document.createElement('article')
newComment.textContent = "Hello"
fragment.appendChild(newComment)
console.log(fragment)
document.querySelector("#newText").appendChild(fragment)


const newSect1 = document.createElement("section");
newSect1.className="messages"
const textNode1 = document.createTextNode("Hello")
newSect1.appendChild(textNode1)
document.querySelector("#newText").appendChild(newSect1)

console.log(newSect1)

const newSect2 = document.createElement("section");
newSect2.className="messages"
const textNode2 = document.createTextNode("When will you be here?")
newSect2.appendChild(textNode2)
document.querySelector("#newText").appendChild(newSect2)

console.log(newSect2)

const newSect3 = document.createElement("section");
newSect3.className="messages"
const textNode3 = document.createTextNode("I will be there in 10 min")
newSect3.appendChild(textNode3)
document.querySelector("#newText").appendChild(newSect3)

console.log(newSect3)

const newSect4 = document.createElement("section");
newSect4.className="messages"
const textNode4 = document.createTextNode("Sounds great!")
newSect4.appendChild(textNode4)
document.querySelector("#newText").appendChild(newSect4)


console.log(newSect4)