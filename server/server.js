const express=require('express')
const mongoose=require('mongoose')
//link mongo,using imooc 集合 
const DB_URL='mongodb://localhost:27017/imooc' 
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})
//通过mongoose来操作mongo 实现增删改查 定义文档模型，Schema和Modele新建模型
const User=mongoose.model('user',new mongoose.Schema({
    user:{type:String, require:true},
    age:{type:Number,require:true}
}))
User.create({
    user:'Yuyu',
    age:18,
},function(err,doc){
    if(!err){
        console.log(doc)
    }
    else{
        console.log(err)
    }
})
 User.remove({age:18},function(err,doc){ 
console.log(doc)
 })

 User.update({'user':'xiaoming'},{'$set':{age:26}},function(err,doc){
     console.log(doc)
 })
// new app
const app=express();
app.get('/',function(req,res){
    res.send('<h1>hello Yanjin</h1>')
})
app.get('/data',function(req,res){
    User.find({},function(err,doc){
        return res.json(doc)
    })
    
})
app.listen(9093,function(){ 
    console.log('Node app start at port 9093')
})