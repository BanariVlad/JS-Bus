class Bus {
  constructor(bus) {
    this.position = {
      x: 0,
      y: 0
    }
    this.bus = bus;
    this.timer = 500;
  }

  setPosition() {
    this.bus.setAttribute(`style`, `transform: translate(${this.position.x}px, ${this.position.y}px)`);
  }

  moveUp() {
    setTimeout(() => {
      this.position.y -= 100;
      this.setPosition();
    }, this.timer);
    this.incrementTimer();
  }

  moveDown() {
    setTimeout(() => {
      this.position.y += 100;
      this.setPosition();
    }, this.timer);
    this.incrementTimer();
  }

  moveRight() {
    setTimeout(() => {
      this.position.x += 100;
      this.setPosition();
    }, this.timer);
    this.incrementTimer();
  }

  moveLeft() {
    setTimeout(() => {
      this.position.x -= 100;
      this.setPosition();
    }, this.timer);
    this.incrementTimer();
  }

  incrementTimer() {
    this.timer += 500;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('startBusBut').addEventListener('click', start);
})

const start = () => {
  const bus = new Bus(document.getElementById('bus'));
  bus.moveRight();
  bus.moveDown();
  bus.moveDown();
  bus.moveLeft();
  bus.moveDown();
  bus.moveRight();
  bus.moveDown();
  bus.moveRight();
  bus.moveUp();
  bus.moveRight();
  bus.moveUp();
  bus.moveLeft();
  bus.moveUp();
  bus.moveUp();
  bus.moveRight();
  bus.moveRight();
  bus.moveDown();
  bus.moveLeft();
}
