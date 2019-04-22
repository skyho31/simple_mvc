(function (exports){
  const Model = class {
    constructor (value = 100) {
      this.data = value
    }
  
    increase (value = 1) {
      this.data += value
    }
  
    decrease (value = 1) {
      this.data -= value
    }
  
    getData () {
      return this.data
    }
  }
  
  exports.Model = Model  
})(this)
