const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

app.get('/', (req , res) =>{
    res.send('Hello Prithibi ami biday nilam')
});

const users = [
    {id:1, name:'Sabana', email: 'sabanara@gmail.com', phone:'01700000000'},
    {id:2, name:'Sahanara', email: 'sahanara@gmail.com', phone:'01700000000'},
    {id:3, name:'kohinur', email: 'kohinr@gmail.com', phone:'01700000000'},
    {id:4, name:'kobita', email: 'kobita@gmail.com', phone:'01700000000'},
    {id:5, name:'bobita', email: 'bobita@gmail.com', phone:'01700000000'},
    {id:6, name:'lolita', email: 'lolita@gmail.com', phone:'01700000000'},
    {id:7, name:'chobita', email: 'chobirota@gmail.com', phone:'01700000000'},
]

app.get('/users', (req, res) =>{
    if(req.query.name){
        const  search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else{
        res.send(users);
    }
})

app.get('/user/:id', (req, res) =>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user);
}) 

app.post('/user', (req, res) =>{
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1; 
    users.push(user);
    res.send(user);
})

app.listen(port, () =>{
    console.log('listeing to port', port);
})
