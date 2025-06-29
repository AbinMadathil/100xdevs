const zod = require("zod");


const createTodoSchmea = zod.object({
    title: zod.string(),
    description: zod.string()
})


const updateTodoSchema = zod.object({
    id: zod.string()
})



module.exports = {
    CreateTodoSchema: createTodoSchmea,
    UpdateTodoSchema: updateTodoSchema
}