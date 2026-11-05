const express = require("express")
const usersRouter = require("./routes/Users");
const app = express()
const port = 4000;

app.use("/user", usersRouter)



app.listen(port,() => {
    console.log(`Started listening on port ${port}`)
})