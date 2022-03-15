const express = require('express');
const bodyParser = require("body-parser");


const date = require(__dirname+"/date.js");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));


var items = ["eat food","cook food","shop food"];




// get methdd for sending date to ejs
app.get('/', (req, res) => {
let day = date.getDAY();
  res.render('list', {actualday: day, newlistitem : items});
});





//post method to get data from list.ejs form 
app.post("/",function(req,res){
    var item = req.body.hi;
    items.push(item);
    res.redirect("/");
})









app.listen(4000, () => console.log('Example app listening on port 4000!'));