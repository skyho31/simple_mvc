window.addEventListener('load', () => {
  console.log('app.js executed')
  const appElement = document.querySelector('#app')
  const appModel = new Model()
  new Controller(appElement, appModel)
})
