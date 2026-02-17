//this is the implementation of factory function of design pattern without classses and objects

function createproduct(name, price) {
  let stock = 100;
  return {
    name,
    price,

    buy(qty) {
      if (qty <= stock) {
        stock -= qty;
        console.log(`order Sucess ${qty} stock left ${stock}`);
        console.log(`Product - ${name} Price - ${price}`);
      } else {
        console.error(`we only have ${stock} quantity`);
      }
    },
    refill(qty) {
      stock += qty;
      console.log(`Quantity added- ${qty} and total stock is- ${stock}`);
    },

    checkstock() {
      console.log(`the stock for selected product is- ${stock}`);
    },
  };
}

let mac = createproduct("mac m4", 2000);
let iphone = createproduct("ipone 8", 3000);
