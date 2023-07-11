//video num.:90
//to execute the app do:
//Open postman
//Open studio 3T
//Connect to the DB : cd  C:/Users/elvar/mongodb/bin , .\mongod.exe --dbpath="C:\Users\elvar\mongodb-data"
//execute the code with nodemon with the command: npm run dev


const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');


