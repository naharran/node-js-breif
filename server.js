const express = require("express")
const usersRouter = require("./routes/Users");
const app = express()
const port = 4000;

app.use("/user", usersRouter)

console.log("Hello world")



app.listen(port,() => {
    console.log(`Started listening on port ${port}`)
})