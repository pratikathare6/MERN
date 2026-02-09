let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");

form.addEventListener("submit", function (elem) {
  elem.preventDefault();

  let card = document.body;
    
  let profile = document.createElement("div");
  let img = document.createElement("img");
  img.setAttribute("src", inputs[1].value);
    profile.appendChild(img);

  let h3 = document.createElement("h3");
  h3.textContent = inputs[0].value;

  let h5 = document.createElement("h5");
  h5.textContent = inputs[2].value;

  let p = document.createElement("p");
  p.textContent = inputs[3].value;  


  card.appendChild(profile);
  card.appendChild(h3);
  card.appendChild(h5);
  card.appendChild(p);

   inputs.forEach(function(inp){

      if(inp.type !='submit'){

        inp.value = ''
      };

    })


});
   