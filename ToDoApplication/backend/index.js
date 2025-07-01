const express = require('express');
const { CreateTodoSchema, UpdateTodoSchema } = require('./types');
const { ToDo, connectDB } = require('./db');
const app = express();


app.use(express.json());


//get all todos 
app.get('/', async (req,res)=>{
    const todos = await ToDo.find({});
    res.status(200).send(todos);
})

//create a todo
app.post('/todo',async (req,res)=>{
    const todo = req.body;
    const todoValidation = CreateTodoSchema.safeParse(todo);
    //parse does not return success or error, it returns an object with success and error properties.

    if(!todoValidation.success){
        return res.status(400).send(todoValidation.error);
    }
    await ToDo.create({
        title: todo.title,
        description: todo.description
    })
    res.status(201).send({
        message: "Todo Created Succesfully"
    })
})

//get a particular todo
app.get('/todos',async (req,res)=>{
    const todos = await ToDo.find({});
    res.status(200).send(todos);
})

//complete a todo
app.put('/completed:id',async (req,res)=>{
    const id = req.params.id;
    const idValidation = UpdateTodoSchema.parse(idFromPayload);
    if(!idValidation.success){
        return res.status(400).send(id.error);
    }
    const todo = await ToDo.find({id: {$in: [id]}});
    const updateValues = req.body;
    todo.isCompleted = updateValues.isCompleted;
    await todo.save();
    return res.status(200).send({
        message: "Todo Updated Successfully",
        value: todo
    });
})







app.listen(3002,()=>{
    console.log("Servers is listening on port 3002");
    connectDB();
})