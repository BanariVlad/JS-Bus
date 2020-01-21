class Bus {
  constructor(bus) {
    this.position = {
      x: 0,
      y: 0
    }
    this.bus = bus;
  }

  setPosition() {
    this.bus.setAttribute(`style`, `transform: translate(${this.position.x}px, ${this.position.y}px)`);
  }

  moveUp() {
    this.position.y -= 100;
  }

  moveDown() {
    this.position.y += 100;
  }

  moveRight() {
    this.position.x += 100;
  }

  moveLeft() {
    this.position.x -= 100;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('startBusBut').addEventListener('click', start);
})

const start = () => {
  const bus = new Bus(document.getElementById('bus'));
  const route = [
    bus.moveRight(),
    bus.moveRight(),
    bus.moveDown(),
    bus.moveRight(),
    bus.moveUp(),
    bus.moveLeft(),
    bus.moveDown(),
    bus.moveDown(),
    bus.moveLeft(),
    bus.moveDown(),
    bus.moveRight(),
    bus.moveUp(),
    bus.moveUp()
  ]

  for (let i = 0; i < route.length; i++) {
    setTimeout(() => {
      bus.setPosition();
    }, 1000 * (i + 1));
  }
}
