import { getChildren } from './database.js'

//click event listener
document.addEventListener('click', (clickEvent) => {
  const itemClicked = clickEvent.target
  if (itemClicked.id.startsWith('child')) {
    //splits the string apart into an array to have the primery key of an object
    const [, childId] = itemClicked.id.split('--')
    //find the whole object by iterating
    for (const child of children) {
      //compare the primary key and display the window alert message
      if (child.id === parseInt(childId)) {
        window.alert(`${child.name} has a wish of ${child.wish}`)
      }
    }
  }
})

const children = getChildren()

export const Kids = () => {
  let html = '<ol>'

  for (const child of children) {
    html += `<li id="child--${child.id}">${child.name}</li>`
  }

  html += '</ol>'
  return html
}
