const express = require("express");
const app = express();
const port =8000 ;
const path = require("path");
const hbs = require("hbs");
//static path
const static_path = path.join(__dirname , "../public");

app.set("view engine" , "hbs");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.set("views" , template_path);
hbs.registerPartials(partials_path);



app.use(express.static(static_path));

app.get("/" , (req,res) => {
    res.render("index.hbs");
});

app.get("/about" , (req,res) => {
    res.render("about.hbs");
});

app.get("/weather" , (req,res) => {
    res.render("weather.hbs");
});

app.get("*" , (req,res) => {
    res.render("error.hbs");
});

app.listen(port , () => {
    console.log(`listening the port no ${port}`);
})