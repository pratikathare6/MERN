let Bank = (function () { //iife function
  let bankbalance = 1000;

  function checkbalance() {
    console.log(bankbalance);
  }

  function withdraw(val) {
    if (bankbalance >= val) {
      bankbalance -= val;
      console.log(bankbalance);
    }
  }
  function credit(val) {
    bankbalance += val;
  }

  return {
    checkbalance,   //retutning thr private functions into global with object 
    withdraw,       //so we can access like this bank.withdraw()
    credit,
    bankbalance,
  };
})();
