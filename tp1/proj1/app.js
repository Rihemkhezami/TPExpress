const express = require('express');
const category = require('./routes/category')

//create instance of express server  
const app = express() 

app.use('/category',category)

//first route with get method and send response to the client
app.get('/',(req,res)=>{
    //res.send("<h1>hello world</h1>")
    //res.send({id:1,name:"sachin"})
   // res.json({id:1,name:"sachin"})
   res.sendFile(__dirname+'/index.html')
})

app.get('/products',(req,res)=>{
    res.send([{id:1,name:"sachin"},{id:2,name:"saurav"}])
   
})

app.get('/template',(req,res)=>{
    res.redirect('products')
})

app.listen(5000,()=>{
    console.log("server is running on port 5000")

})