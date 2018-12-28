const mongoose = require("mongoose")
const DB_URL = "mongodb://localhost:27017/chat"
mongoose.connect(DB_URL)
mongoose.connection.on("connected",function(){
    console.log("mongo connected")
})

const models = {
    user:{
        'user':{'type':String,'require':true},
        'pwd':{'type':String,'require':true},
        'type':{'type':String,'require':true},
        'avatar':{'type':String},
        'desc':{'type':String},
        'title':{'type':String},
        'company':{'type':String},
        'money':{'type':String}                   
    },
    chat:{
        'chatid':{'type':String,'require':true},//each one has its own chatid
        'read':{'type':Boolean,'default':false},
        'from':{'type':String,'require':true},
        'to':{'type':String,'require':true},
        'content':{'type':String,'require':true,'default':''},
        'create_time':{'type':Number}
    }
}

for(let m in models){
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getMoudel:function(name){
        return mongoose.model(name)
    }
}