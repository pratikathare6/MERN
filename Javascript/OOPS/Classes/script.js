class Createpencil {
  constructor(color) {
    this.color = color;
  }

  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.append(h1);
  }

  erase() {
    document.body.querySelectorAll("h1").forEach((elem) => {
      if (elem.style.color === this.color) {
        elem.remove();
      }
    });
  }
}

Createpencil.prototype.specs = {
  name: "pencil",
  make: "0220",
};

let p1 = new Createpencil("red");
let p2 = new Createpencil("green");
