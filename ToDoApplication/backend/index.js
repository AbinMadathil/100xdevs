const express = require('express');
const app = express();


app.use(express.json());

const todoList = [
    {
        id: 1,
        title: "Learn React",
        description: "Learn React by building a simple app",
        isCompleted: false
    },
    {
        id: 2,
        title: "Learn Node",
        description: "Learn Node by building a simple backend",
        isCompleted: false
    }    
]

app.get('/', (req,res)=>{
    res.send("TODO Application");
})

app.post('/todos',(req,res)=>{
    const todo = req.body;

    if(!todo.title || !todo.description){
        return res.status(400).send("Title and description are required");
    }
    if(!todo.isCompleted){
        todo.isCompleted = false;
    }

    todoList.push(todo);
    return res.status(201).send(todo);
})


app.get('/todos',(req,res)=>{
    return res.status(200).send(todoList);
})

app.put('/completed:id',(req,res)=>{
    const id = req.params.id;
    const todo = todoList.find(t=>t.id ==id);
    if(!todo){
        return res.status(404).send("Todo not found");
    }
    todo.isCompleted = true;
    return res.status(200).send(todo);
})





app.listen(3002,()=>{
    console.log("Servers is listening on port 3002");
})