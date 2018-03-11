var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var campgrounds = [
  {name:"Treecko", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png"},
  {name:"Torchic", image: "https://cdn.bulbagarden.net/upload/thumb/9/91/255Torchic.png/250px-255Torchic.png"},
  {name:"Mudkip", image:  "https://cdn.bulbagarden.net/upload/thumb/6/60/258Mudkip.png/250px-258Mudkip.png"}
];

app.get("/", function(req, res){
  res.render("landing");
});


app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

app.get("/campgrounds", function(req,res){
  res.render("campgrounds",{campgrounds:campgrounds});
});


app.post("/campgrounds", function(req,res){
  var name = req.body.name;
  var image = req.body.image;
  var newObject = {name: name, image: image}
  campgrounds.push(newObject);
  res.redirect("/campgrounds");
});








app.listen(3000, function(){
  console.log("Yelp Camp has started");
});
