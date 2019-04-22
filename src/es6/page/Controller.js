(function (exports) {
  const Controller = class {
    constructor (element, model) {
      this._model = model
      this._view = new View(element)

      this.init()
    }

    init () {
      const $increaseButton = document.querySelector('._increase')
      const $decreaseButton = document.querySelector('._decrease')

      this.bindEvent($increaseButton, 'click', this.increase.bind(this))
      this.bindEvent($decreaseButton, 'click', this.decrease.bind(this))

      this._view.render(this._model.getData())
    }

    bindEvent (element, event, handler) {
      element.addEventListener(event, () => handler())
    }

    increase () {
      this._model.increase()
      this._view.render(this._model.getData())
    }

    decrease () {
      this._model.decrease()
      this._view.render(this.model.getData())
    }
  }

  exports.Controller = Controller
})(this)
