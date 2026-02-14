class User {
  constructor(username, age, email) {
    this.username = username;
    this.age = age;
    this.occupation = email;
    this.role = "User";
  }

  checkrole() {
    return `you are a ${this.role}`;
  }

  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = `${this.username}: ${text}`;
    document.body.append(h1);
  }
}

class Admin extends User {
  constructor(username, age, email) {
    super(username, age, email);
    this.role = "admin";
  }

  remove() {
    document.querySelectorAll("h1").forEach(function (elem) {
      elem.remove();
    });
  }
}

let user1 = new User("pratik", 12, "abc@mail");
let user2 = new User("pratikaa", 12, "abc@mail");

let admin1 = new Admin("admin", 12, "admin@admin");
