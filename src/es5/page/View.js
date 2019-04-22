(function(exports){
  function View (value) {

  }

  View.prototype = {
    render: value => {
      document.querySelector('.counter').innerHTML = value
    }
  }

  exports.View = View
})(this)
