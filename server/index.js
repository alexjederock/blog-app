const express = require('express')
const app = express()

app.get('/', (req,res)=>{
  res.send('Hello friendossss')
})

app.listen(3001, ()=> {
  console.log('Runnning on port 3001...')
})

