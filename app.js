const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/', (req, res) => {
    res.render("ajax", {quote:"Ajax is great"});
});


app.post("/", (req,res)=> {
    res.send({quote: req.body.quote});
});



app.listen(3000,()=>{
    console.log("Server running at port 3000");
});