require('../src/db/mongoose')
const Task = require('../src/models/task')


// Task.findByIdAndDelete('64abe9a8b5d08c4f08662281').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async (id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count

}

deleteTaskAndCount("64ad0606c1ec8d45c46733bc").then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})