//CRUD cret, read, update, delete funcs

//importing lib monodb
// const mongodb = require("mongodb-legacy")
// const MongoClient = mongodb.MongoClient

// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectId} = require('mongodb-legacy')

 
//init the connection


//define connection URL
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser: true},(error,client)=>{
        
    if(error){
        return console.log('Unable to connect to db')
    }

    const db = client.db(databaseName)

    // db.collection('tasks').updateMany({
    //     completed: false
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })


    // db.collection('users').updateOne({
    //     _id: new ObjectId("64abbc7512d347693428d640")
    // },{
    //     $inc: {
    //         age: 1
    //     }
    // },).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age: 28
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'clean da house'
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})

