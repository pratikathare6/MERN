let pr = new Promise(function (res, rej) {
  setTimeout(function () {
    let rn = Math.floor(Math.random() * 10);

    if (rn > 5) {
      res("this is resolved " + rn);
    } else {
      rej("this is rejected " + rn);
    }
  }, 3000);
});

async function abcd() {
  try {
    let val = await pr;
    console.log(val);
  } catch (err) {
    console.log(err);
  }
}

abcd();
