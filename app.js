const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var port = 3000;

var items = [];

// EXTREMELY IMPORTANT THAT THIS LINE USES ' ' AND NOT " "
// THIS CAUSED AN IRRITATING CANNOT GET %20 ERROR FOR ME
app.set('view engine', 'ejs'); // what we need for ejs to work
app.use(express.static("public")); // what we need to use for dynamic/server website
app.use(bodyParser.urlencoded({extended: true})); // what we need for bodyParser to work

app.get("/", function(req, res) {
  // res.send("Server is live!");
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    dayOfWeek: day,
    newListItems: items
  });
});

app.post("/", function(req, res) {
  var item = req.body.newItem;
  items.push(item);
  // console.log(item);

  res.redirect("/");
});

// app.post();

app.listen(port, function() {
  console.log("Server is currently running on port " + port);
});








// var currentDay = today.getDay();
// var day = "";
// if (currentDay === 6 || currentDay === 0){
//   day = "weekend";
// } else{
//   day = "weekday";
// }
// switch (currentDay) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default:
//     day = "Unknown";
//     console.log("Error with getting currentDay: " + currentDay);
// }



// res.send("Yay! It's the weekend!");
// res.write("<h1>yay! it's the weekend!</h1>");
// res.send();
// res.sendFile(__dirname + /weekend.html);

// res.send("Boo! I have to work today :(")
// res.write("<h1>Boo! I have to work today :( </h1>");
// res.write("<h3>... this sucks.</h3>");
// res.send();
// res.sendFile(__dirname + "weekday.html");
