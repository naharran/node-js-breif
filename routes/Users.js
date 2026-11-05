const express = require("express")
const router = express.Router()

const users = [
    {id:1,fullName:"Amos Biderman", age:50}, 
    {id:2,fullName:"Yossi Cohen", age:44}, 
]

router.get("/:id", (req,res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({error: "user not found"});
    }
    

    res.send(user)
})

router.post("/", (req,res) => {
    const {fullname,age}= req.body;
    if (!fullname||!age) {
        return res.status(404).json({ error: "name and age required"});
        
    }
        const newUser = {
            id: users.length+1,
            fullname,
            age


        };
        users.push(newUser);
        res.status(201).json(newUser);
    }

)

router.put("/", (req,res) => {



})

router.delete("/:id", (req,res) => {

    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1){
        return res.status(404).json({ error: "user not found"});
    }

    users.splice(userIndex, 1);
    res.status(204).send();

})

module.exports = router