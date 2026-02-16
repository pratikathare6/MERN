let pr = new Promise(function (res, rej) {
  setTimeout(function () {
    let rn = Math.floor(Math.random() * 10);

    if (rn > 5) {
      res("resolved wtih " + rn);
    } else {
      rej("rejected with " + rn);
    }
  }, 3000);
});

//if resolves
pr.then(
  function (val) {
    console.log(val);
  }, //if rejects
).catch(function (val) {
  console.log(val);
});
