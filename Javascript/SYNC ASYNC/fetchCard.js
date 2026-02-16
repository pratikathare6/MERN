function getdata() {
    
  const container = document.getElementById("card-container");
  container.innerHTML = "";

  fetch("https://randomuser.me/api/?results=3")
    .then((rawdata) => rawdata.json())
    .then((data) => {
      data.results.forEach(function (user) {
        const card = document.createElement("div");
        const img = document.createElement("img");
        const title = document.createElement("h2");
        const text = document.createElement("p");
        const button = document.createElement("button");

        card.className = "card";

        img.src = user.picture.large;
        img.alt = "Logo";

        title.textContent = user.name.first + " " + user.name.last;
        text.textContent = user.location.timezone.description;
        button.textContent = "Active";

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(text);
        card.appendChild(button);

        container.appendChild(card);
      });
    });
}

getdata();

document.querySelector("#btn").addEventListener("click", function () {
  getdata();
});
