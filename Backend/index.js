const express = require("express");
const app = express();
const port = 5000;

// connecting the db
const connect = require("./db");
connect();


//  use routers
app.get("/",(req,res)=>{
    res.send("Welcome to the API");
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
