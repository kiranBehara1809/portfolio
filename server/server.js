const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 4999


app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))