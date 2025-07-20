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


// writing routes
// 2 arguements:
//               1. string representing the endpoint examples: /about-me or /homepage
//               2. A function that runs if a request is sent here

console.log(__dirname)
app.get("/about",(req, res)=>{
    console.log("Download nodemon ")
    res.sendFile(__dirname + "/views/about-me.html")
})

// exercise 2:
// Create a /homepage route
// for this route if the request is sent a file should be sent back
// the file should be in the views folder called home.html
// it should contain an h1 that says welcome to my site [NAME]



app.listen(3000,()=>{
    console.log("Listening on port 3000")
})

