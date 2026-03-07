const express = require("express");
const usermodel = require("./Models/usermodel");
const postsmodel = require("./Models/postsmodel");
const app = express();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/profile", isloggedin, async (req, res) => {
  //log the userdata after jwt verifies req.user
  console.log(req.user);

  let user = await usermodel.findOne({email:req.user.email}).populate("posts")//like join
   
  res.render("profile",{user});
});

app.get("/like:id", isloggedin, async (req, res) => {

  let post = await postsmodel.findOne({_id:req.params.id}).populate("user")
    
  if(post.likes.indexOf(req.user.userid)=== -1){

      post.likes.push(req.user.userid)
  }
  else{
    post.likes.splice(post.likes.indexOf(req.user.userid),1);

  }
  await post.save();
  res.redirect("/profile");
});



app.post("/post", isloggedin, async (req, res) => {
  let user = await usermodel.findOne({email:req.user.email})

    let {content} = req.body
       let post = await postsmodel.create({

            user:user._id,
            content

        })

        console.log(post)

        user.posts.push(post._id)
        await user.save();
        res.redirect('/profile')

});




app.post("/register", async (req, res) => {
  let { username, name, age, email, password } = req.body;

  let user = await usermodel.findOne({ email });

  if (user) return res.status(500).send("Email already exists");

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let user = await usermodel.create({
        username,
        name,
        age,
        email,
        password: hash,
      });

      let token = jwt.sign({ email: email, userid: user._id }, "scereatkey");

      res.cookie("token", token);

      res.send("Registered");
    });
  });
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;

  let user = await usermodel.findOne({ email });

  if (!user) return res.status(500).send("User is not registered");

  bcrypt.compare(password, user.password, (err, result) => {
    if (result == true) {
      //create the jwt token contains email and userid
      let token = jwt.sign({ email: email, userid: user._id }, "scereatkey");

      res.cookie("token", token);
      res.redirect("/profile");
    } else res.send("Email or Password is wrong");
  });
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
});

//middleware to proptect the routes
//ex: if the user is not logged in he should not access the profile page
function isloggedin(req, res, next) {
  if (req.cookies.token == "") res.redirect("/login");
  else {
    //verify the token and get email and useid in the req.user
    let data = jwt.verify(req.cookies.token, "scereatkey");
    req.user = data;
    //here .user is a property in the req
  }
  next();
}



app.get('/edit/:id',isloggedin, async (req,res)=>{

    
    let post = await postsmodel.findOne({_id:req.params.id})
    res.render('edit',{post})
     
})

app.post('/edit/:id',isloggedin, async (req,res)=>{

    
    let post = await postsmodel.findOneAndUpdate({_id:req.params.id}, {content: req.body.content})
    res.redirect('/profile')
     
})

app.get('/delete/:id',isloggedin, async (req,res)=>{

    let deleted = await postsmodel.findOneAndDelete({_id:req.params.id})
    console.log(deleted)
    res.redirect('/profile')
     
})
 



app.listen(3000);
