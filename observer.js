class observer {
  constructor () {
    this.observers = []
  }

  subscribe(observer) {
    this.observers.push(observer)
  }

  unsubscribe(observer) {
    const index = this.observers.indexOf(observer)
    if (index > -1) {
      this.observers.slice(index, 1)
    }
  }

  notifyAll() {
    for (let o of this.observers) {
      console.log(o.name, "has been notified")
    }
  }
}
