const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const User = require('./User');
const users=[];

//Add
app.post('/add',(req,res)=>{
    const user = new User(req.body.fName,req.body.lName,new Date(req.body.dob),Date.now());
    users.push(user);
    res.status(200).send({message:"User successfully Added",data:user})
})

//Read specific
app.get('/user/:id',(req,res)=>{

   try{
       const index = users.findIndex(instance=>{
           return instance.id===parseInt(req.params.id)
       })

       if(index>-1){
           res.status(200).send({message:"User successfully retrieved",data:users[index]})
       }
       else
           res.status(404).send({message:"User not retrieved"})
   }
   catch(e){
       res.status(500).send({message:"Error :"+e})
   }
})



app.listen(3000,(err)=>{
    console.log("Server listening at port :3000");
})