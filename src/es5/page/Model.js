(function(exports){
  function Model (value) {
    value = value || 100
    this.data = value

    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.getData = this.getData.bind(this)
  }

  Model.prototype = {
    increase: function(value) {
      value = value || 1
      this.data += value
    },
    decrease: function(value) {
      value = value || 1
      this.data -= value
    },
    getData: function() {
      return this.data
    }
  }

  exports.Model = Model
})(this)
