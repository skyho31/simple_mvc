/**
 * 모델은 뷰와 컨트롤러에 대해 알고 있으면 안된다.
 */
class Model {
  constructor () {
    this.sum = 0
  }

  calculate (a, b) {
    this.sum = a + b
    return this.sum
  }
}

/**
 * 뷰는 어떠한 로직도 가지고 있으면 안되며, 컨트롤러와 모델을 알아선 안된다.
 * 인터렉션을 위해 모델을 적합한 형태로 렌더링
 */
class View {
  constructor () {
    this.app = document.getElementById('app')
  }

  displayResult (result) {
    this.app.innerHTML = result
  }
}

/**
 * 이벤트에 반응함. 사용자의 행동, 모델에 변화를 가하며, 뷰에 영향을 끼침.
 * 컨트롤러는 이벤트 리스너를 뷰에 추가함.
 * 어떠한 행동을 했을 때 컨트롤러 안에 있는 이벤트 트리거가 실행됨
 */
class Controller {
  constructor () {
    this.model = new Model()
    this.view = new View()
  }

  displayResult () {
    this.view.displayResult(this.model.calculate(30, 30))
  }
}

const controller = new Controller();
controller.displayResult()
