let letterize = text => text
    .split("")
    .map(letter => `<span class=letter>${letter}</span>`)
    .join("")


let letterizeNode = node => node.innerHTML = letterize(node.textContent)

let doomedNodes = document.querySelectorAll('.explode-me')

doomedNodes.forEach(doomedNode => letterizeNode(doomedNode))

// setting n to be a random number using math equations 
let random = n => Math.floor(n * Math.random())

 

let randomExplode = () => {
  let x = random(1000)
  let y = random(1000)
  
  return [
    {
      transform: 'rotate(0deg) translate3D(50%, 50%, 0)',
      color: "black",
      opacity: 1
    },
    {
      transform: `rotate(${random(360)}deg) translate3D(${Math.random() < .5 ? "-" : ""}${x}%, ${Math.random() < .5 ? "-" : ""}${y}%, 0)`,
      color: "red",
      opacity: 0
    }
  ]
}

let timing = {
  duration: 2000,
  iterations: Infinity,
  easing: 'ease-in-out',
  delay: 1000
}

document.querySelectorAll('.letter')
  .forEach(letter => letter.animate(randomExplode(), timing))

