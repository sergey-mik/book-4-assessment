import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

// define a function that builds an object and define a parameter 
const findCelebrityMatch = (kidObject, celebrityArray) => {
  // define null to store all of the objects
  let celebritiy = null
  // iterate the array value
  for (const celebrity of celebrityArray) {
    // check if the primary key equals the foreign key
    if (celebrity.id === kidObject.celebrityId) {
      // add matching celebrities to the array of celebritiy
      celebritiy = celebrity
    }
  }
  // after the loop is done, return the string
  return celebritiy
}

export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        html += `
            <li>
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}
