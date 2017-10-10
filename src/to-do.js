// @flow

const url = 'https://api.myjson.com/bins/9l2ez'

fetch(url).then(response => {
  response.json().then(data => {
    const elements = document.getElementById('to-do')
    const list = document.createElement('ul')

    elements.appendChild(list)

    for (let i = 0; i < data.todos.length; i++) {
      const element = document.createElement('li')
      const textElem = document.createTextNode(data.todos[i].label)

      if (data.todos[i].complete) {
        element.classList.add('checked')
      }
      element.addEventListener('click', function() {
        this.classList.toggle('checked')
      })

      element.appendChild(textElem)
      list.appendChild(element)
    }
  })
}).catch(error => {
  console.log(error.message)
})
