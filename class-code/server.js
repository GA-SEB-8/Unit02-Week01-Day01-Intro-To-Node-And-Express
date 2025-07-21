// 1. npm init -y: initializes my application as a node application

// 2. npm install express

// 3. const express = require("express")

// 4. const app = express()

// 5. app.listen(3000,()=>{
// console.log("Listening on port 3000")
// })




// npm install name-of-package

// to import package

const express = require("express") //importing express package

const app = express() // creates a express application


app.use(express.static('public')); //all static files are in the public folder


function omarMiddleware(req,res,next){
    console.log("You are authenticated")
    next()
}

app.use(omarMiddleware)
// writing routes
// 2 arguements:
//               1. string representing the endpoint examples: /about-me or /homepage
//               2. A function that runs if a request is sent here



app.get("/about",(req, res)=>{
    console.log("Download nodemon ")
    res.sendFile(__dirname + "/views/about-me.html")
})

j

// exercise 2:
// Create a /homepage route
// for this route if the request is sent a file should be sent back
// the file should be in the views folder called home.html
// it should contain an h1 that says welcome to my site [NAME]


app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/home.html")
})


app.listen(3000,()=>{
    console.log("Listening on port 3000")
})




