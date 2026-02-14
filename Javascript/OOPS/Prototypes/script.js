function Createpencil(username, age) {
  this.username = username;
  this.age = age;
}

Createpencil.prototype.comapany = "heera"; //here we attached the prototype to the createpencil class
//so all the objects by default get prototype company also we can attach the write function to save the space
// prncil.write()

let pencil1 = new Createpencil("pratik", 12);
