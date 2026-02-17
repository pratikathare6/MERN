let input = document.querySelector("#inp");

function throttle(fnc, delay) {
  let timer = 0;

  return function (...args) {
    let now = Date.now();

    if (now - timer >= delay) {
      timer = now;
      fnc(...args);
    }
  };
}

input.addEventListener(
  "input",
  throttle(function () {
    console.log("hello Throttle");
  }, 1000),
);
