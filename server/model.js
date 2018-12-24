const mongoose=require('mongoose')
//link mongo,using imooc 集合 
const DB_URL='mongodb://localhost:27017/imooc' 
mongoose.connect(DB_URL)