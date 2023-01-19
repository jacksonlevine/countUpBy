//Business Logic

window.onload = initialize

function initialize() {
  let form = document.querySelector("form")
  form.onsubmit = takeForm
}

function takeForm(event) {
  event.preventDefault()
  let countTo = parseInt(document.getElementById("countTo").value)
  let countBy = parseInt(document.getElementById("countBy").value)
  let numberArray = makeNumberArray(countTo, countBy)
  displayArray(numberArray)
}

function makeNumberArray(countTo, countBy) {
  let array = []
  for(let i = 0; i < countTo; i+=countBy) {
    array.push(i)
  }
  return array
}

function setEntireArrayToNine(array) {

  for(let number = 0; number < array.length; number++) {

    array[number] = 9

  }

}

function makeULFromArray(array) {
  if(array.length === 0) {
    return null;
  }
  let ul = document.createElement("ul")
  array.forEach(
    function(element) {
      let li = document.createElement("li")
      li.innerText = element
      ul.append(li)
    }
  )
  return ul;
}

//User Interface Logic

function displayArray(array) {
  let ulFromArray = makeULFromArray(array)
  let outputSpot = document.getElementById("outputSpot")
  outputSpot.innerText = ""
  outputSpot.append(ulFromArray)
}
