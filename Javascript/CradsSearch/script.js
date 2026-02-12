const users = [
  {
    img: "https://plus.unsplash.com/premium_photo-1770749403846-78ca39f655b1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
    name: "John Doe",
    bio: "Full-Stack Developer passionate about creating beautiful, responsive web experiences. Always learning and building.",
  },
  {
    img: "https://images.unsplash.com/photo-1603415526960-2e9599cab104?w=800&auto=format&fit=crop&q=80",
    name: "Alice Smith",
    bio: "Frontend Engineer focused on crafting intuitive and accessible user interfaces.",
  },
  {
    img: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?w=800&auto=format&fit=crop&q=80",
    name: "Michael Brown",
    bio: "Backend Developer specializing in scalable APIs and cloud infrastructure.",
  },
  {
    img: "https://images.unsplash.com/photo-1614698271377-8ee0b7f8b71e?w=800&auto=format&fit=crop&q=80",
    name: "Emily Davis",
    bio: "UI/UX Designer transforming user needs into stunning, functional designs.",
  },
  {
    img: "https://images.unsplash.com/photo-1573496359147-8e7cfeff045d?w=800&auto=format&fit=crop&q=80",
    name: "David Wilson",
    bio: "Data Scientist turning raw data into actionable insights and intelligent systems.",
  },
  {
    img: "https://images.unsplash.com/photo-1614851022549-5595b6f64f1f?w=800&auto=format&fit=crop&q=80",
    name: "Sophia Chen",
    bio: "Mobile Developer building fast, cross-platform apps with React Native and Flutter.",
  },
  {
    img: "https://images.unsplash.com/photo-1566492031773-08b354b1bfe5?w=800&auto=format&fit=crop&q=80",
    name: "James Patel",
    bio: "DevOps Engineer automating deployments and optimizing cloud performance.",
  },
  {
    img: "https://images.unsplash.com/photo-1556157382-7e3d43888f38?w=800&auto=format&fit=crop&q=80",
    name: "Olivia Wright",
    bio: "Product Manager bridging engineering, design, and customer needs.",
  },
  {
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80",
    name: "Daniel Kim",
    bio: "QA Engineer ensuring quality through automated testing and bug hunting.",
  },
  {
    img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cd81c5?w=800&auto=format&fit=crop&q=80",
    name: "Luna Rodriguez",
    bio: "Tech Advocate empowering developers through open-source and community events.",
  },
];

function getdata(users) {
  document.querySelector("#profile-container").innerHTML = "";
  users.forEach(function (user) {
    // Create main profile card
    const profileCard = document.createElement("div");
    profileCard.className = "profile-card";

    // Create profile image
    const profileImg = document.createElement("img");
    profileImg.src = user.img;
    profileImg.alt = "Profile";
    profileImg.className = "profile-image";

    // Create content container
    const profileContent = document.createElement("div");
    profileContent.className = "profile-content";

    // Create name
    const profileName = document.createElement("h2");
    profileName.className = "profile-name";
    profileName.textContent = user.name;

    // Create bio
    const profileBio = document.createElement("p");
    profileBio.className = "profile-bio";
    profileBio.textContent = user.bio;
 
    profileContent.appendChild(profileName);
    profileContent.appendChild(profileBio);
    profileCard.appendChild(profileImg);
    profileCard.appendChild(profileContent);

     
    document.querySelector("#profile-container").appendChild(profileCard);
  });
}

getdata(users);

let inp = document.querySelector("#input");

inp.addEventListener("input", function () {
  console.log(inp.value);
  const filtered = users.filter(function (user) {
    return user.name.toLocaleLowerCase().startsWith(inp.value.toLowerCase());
  });

  if(filtered == ''){

    document.querySelector('#h6').textContent = 'Not found'
    
  }
 
  getdata(filtered);
});
