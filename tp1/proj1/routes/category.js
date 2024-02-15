const express = require('express');
const router = express.Router();


router.get('/all',(req,res)=>{
    res.send([{id:1,name:"sachin"},{id:2,name:"auvre"}])
})


router.get('/one',(req,res)=>{
    res.send({id:1,name:"sachin"})
})



router.get('/',(req,res)=>{
    res.send("<h1>hello category</h1>")
})

module.exports = router;