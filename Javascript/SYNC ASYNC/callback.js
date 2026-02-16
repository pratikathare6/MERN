function abcd(fnc) {
  setTimeout(fnc, Math.floor(Math.random() * 20) * 1000);
}

abcd(function () {
  //this is the callback function

  console.log("callback function");
});
