require('../src/db/mongoose')
const User = require('../src/models/user')

//64abf9296569b636d4b60ef8

User.findByIdAndUpdate('64ac11fc474cb85fb06d6667',{age: 1}).then((user)=>{
    console.log(user)
    return User.countDocuments({age: 1})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})