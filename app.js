const express = require ("express");
const users = require("./api/users");
const {v4 : uuidv4} = require('uuid')
//init express
const app=express();

app.use(express.json());

app.get("/users", (req, res) => {
  res.send(users);
});

// create user 

  app.post('/add', (req, res) => {
    let uuid = uuidv4();
    const newuser = {id : uuid, ...req.body};
    users.push(newuser);
    res.send(users);
  })

//update
app.put ('/update/:id', (req, res) => {
// const {id}= req.params
const id=req.params.id 
const oldUser= users.find((e)=> e.id==id)
const updatedUser = {...oldUser ,...req.body}
res.send(updatedUser)
})



//delete
app.delete ('/delete/:id', (req, res) => {
    // const {id}= req.params
    const id=req.params.id 
    const newUsers= users.filter(e=> e.id !=id)
    // !=  equal moch == 
    res.send(newUsers)
    })
//port
app.listen(5500,err=> {
    if (err) {console.log(err)}
else console.log("server is running on http://localhost:5500")
})


