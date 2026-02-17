class Youtubechannel {
  constructor() {
    this.subscribers = [];
  }

  subscribe(user) {
    this.subscribers.push(user);
    user.update(`${user.name} you have subscribed the channel`);
  }

  unsubscribe(user) {
    this.subscribers = this.subscribers.filter((sub) => sub !== user);
    user.update(`${user.name} you have un-subscribed the channel`);
  }

  notify(msg) {
    this.subscribers.forEach((sub) => sub.update(msg));
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
  update(data) {
    console.log(data);
  }
}

let jsch = new Youtubechannel();

let user1 = new User("pratik");
let user2 = new User("pratikaa");

jsch.subscribe(user1);
jsch.unsubscribe(user2);
jsch.subscribe(user2);

jsch.notify("have subscribed");
