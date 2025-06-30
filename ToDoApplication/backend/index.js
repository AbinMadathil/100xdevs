const express = require('express');
const { CreateTodoSchema, UpdateTodoSchema } = require('./types');
const { todoSchema } = require('./db');
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

app.post('/todos',async (req,res)=>{
    const todo = req.body;
    const todoValidation = CreateTodoSchema.parse(todoPayload);

    if(!todoValidation.success){
        return res.status(400).send(todo.error);
    }
    await todoSchema.create({
        title: todo.title,
        description: todo.description
    })
    res.status(201).send({
        message: "Todo Created Succesfully"
    })
})


app.get('/todos',(req,res)=>{
    return res.status(200).send(todoList);
})

app.put('/completed:id',(req,res)=>{
    const id = req.params.id;
    const idValidation = UpdateTodoSchema.parse(idFromPayload);
    if(!idValidation.success){
        return res.status(400).send(id.error);
    }
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