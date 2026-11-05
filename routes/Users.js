const express = require("express")
const router = express.Router()

const users = [
    {id:1,fullName:"Amos Biderman", age:50}, 
    {id:2,fullName:"Yossi Cohen", age:44}, 
]

router.get("/", (req,res) => {
    res.send(users)
})

router.post("/", (req,res) => {

})

router.put("/", (req,res) => {

})

router.delete("/", (req,res) => {

})

module.exports = router