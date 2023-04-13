const express = require('express')
const uuid = require('uuid')

// uuid => unique id (it provides unique id)
const app = express()


const members = [{
    id:1,
    name: "srishti",
    email: "srishti@gmail.com",
    status: "active"
},{
    id:2,
    name: "siya",
    email: "siya@gmail.com",
    status: 'inactive'
},
{
    id:3,
    name: "riya",
    email: "riya@gmail.com",
    status: 'active'
}]

/*const middleware = (req,res,next)=>{
    console.log('middleware hi');
    next()
}

app.use(middleware);

// http 4 methods :- get,  post,   push,  delete


//get
app.get('/get',(req,res)=>{
    res.send('this is s get request');
})

//post

app.post('/post',(req,res)=>{
    res.send("this is a post request");
})


//put
app.put('/put',(req,res)=>{
    res.send('put request');
})

//delete

app.delete('/delete',(req,res)=>{
    res.send('delete request');
})
*/
app.use(express.json())
app.get('/showallusers',(req,res) =>{
    res.status(200).json(members)
})

app.get("/showuser/:id",(req,res) =>{
    const id = req.params.id;
    const user = members.filter(member => member.id == parseInt(id))
    
    user.length!==0 ?res.status(200).json(user):res.status(200).json({msg: 'user not found'})
})
app.post('/adduser/',(req,res)=>{
    console.log(req.body);
    // const name = req.body.name;
    // const email = req.body.email;
    // const pass = req.body.password;
    const {name, email, password} = req.body;
    console.log(name,email,password);
    members.push({id:uuid.v4(), name, email});
    members.push({id:5,name, email});
    res.status(200).json(members)
})

const PORT = 1000;

app.listen(PORT, ()=>console.log('server is running at',PORT));