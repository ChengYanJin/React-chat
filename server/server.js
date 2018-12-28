const express = require("express")
const userRouter = require('./user')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const model = require('./model')
const Chat = model.getMoudel('chat')
const app = express()
const sever = require('http').Server(app)

app.use(cookieParser())
app.use(bodyParser.json()) 
app.use('/user',userRouter)

sever.listen(9093,function(){
    console.log('open server')
})