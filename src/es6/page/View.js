(function (exports) {
  const View = class {
    constructor (element) {
      this.element = element
      this.result = element.querySelector('._counter')
    }
    render (value) {
      this.result.innerHTML = value
    }
  }

  exports.View = View
})(this)
