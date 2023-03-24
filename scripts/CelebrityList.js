import { getCelebrities } from './database.js'

//click event listener
document.addEventListener('click', (clickEvent) => {
  const itemClicked = clickEvent.target
  if (itemClicked.id.startsWith('star')) {
    //splits the string apart into an array to have the primery key of an object
    const [, celebrityId] = itemClicked.id.split('--')
    //find the whole object by iterating
    for (const celebrity of celebrities) {
      //compare the primary key and display the window alert message
      if (celebrity.id === parseInt(celebrityId)) {
        window.alert(`${celebrity.name} is ${celebrity.sport} star`)
      }
    }
  }
})

const celebrities = getCelebrities()

export const Celebrities = () => {
  let html = '<ol>'

  for (const celebrity of celebrities) {
    html += `<li id="star--${celebrity.id}">${celebrity.name}</li>`
  }

  html += '</ol>'
  return html
}
