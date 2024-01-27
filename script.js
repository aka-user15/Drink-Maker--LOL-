let drink = [];
const orange = document.getElementById("orange")
const apple = document.getElementById("apple")
const grape = document.getElementById("grape")
const fwater = document.getElementById("fizzy-water")
const mango = document.getElementById("mango")
const tea = document.getElementById("tea")
const mix = document.getElementById("mix")
const cup = document.getElementById("cup")

orange.addEventListener("click", () => {
  const el = document.createElement("div")
  el.id = "orange_l"
  el.className = "orange_l"
  cup.appendChild(el)
  drink.push(el.id)
})

apple.addEventListener("click", () => {
  const el = document.createElement("div")
  el.id = "apple_l"
  el.className = "apple_l"
  cup.appendChild(el)
  drink.push(el.id)
})

grape.addEventListener("click", () => {
  const el = document.createElement("div")
  el.id = "grape_l"
  el.className = "grape_l"
  cup.appendChild(el)
  drink.push(el.id)
})

fwater.addEventListener("click", () => {
  const audio = new Audio('./fizz.mp3')
  const el = document.createElement("div")
  audio.play()
  el.id = "fizzy_l"
  el.className = "fizzy_l"
  cup.appendChild(el)
  drink.push(el.id)
})

mango.addEventListener("click", () => {
  const el = document.createElement("div")
  el.id = "mango_l"
  el.className = "mango_l"
  cup.appendChild(el)
  drink.push(el.id)
})

tea.addEventListener("click", () => {
  const el = document.getElementById('tb')
  el.className = "v-t"
  drink.push(el.id)
})

mix.addEventListener("click", () => {
  console.log('mixing...')
  const ending = document.getElementById('ending');
  const rarity = document.getElementById('rarity');
  const ending_p = document.getElementById('ending_p');
  console.log(drink.includes("mango"))
  if (drink.includes("mango_l") && drink.includes("tb")) {
    console.log('lol')
    ending.innerText = "Arizona Mango Tea"
    ending_p.innerText = "Leveled up mango juice"
    rarity.innerText = "Uncommon"
  }
  if (drink.includes("orange_l") && drink.includes("fizzy_l")) {
    console.log('lol')
    ending.innerText = "Fanta"
    ending_p.innerText = "Can i have a 5pc chicken mcnugget with that"
    rarity.innerText = "Epic"
  }
  if (drink.includes("grape_l") && drink.includes("fizzy_l")) {
    console.log('lol')
    ending.innerText = "Grape soda"
    ending_p.innerText = "Grape Fanta"
    rarity.innerText = "Epic"
  }
})
