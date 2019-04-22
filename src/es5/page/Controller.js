(function(exports){
  function Controller (value) {
    this.model = new Model()
    this.view = new View()

    this.view.render(this.model.getData())

    const $increaseButton = document.querySelector('.increase')
    const $decreaseButton = document.querySelector('.decrease')

    const self = this

    $increaseButton.addEventListener('click', function() {
      self.onClickIncrease()
    })
    $decreaseButton.addEventListener('click', function() {
      self.onClickDecrease()
    })
  }

  Controller.prototype = {
    onClickIncrease: function () {
      this.model.increase()
      this.view.render(this.model.getData())
    },
    onClickDecrease: function () {
      this.model.decrease()
      this.view.render(this.model.getData())
    }
  }

  exports.Controller = Controller
})(this)
