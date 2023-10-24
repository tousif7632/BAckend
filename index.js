require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/', (req, res)=>{
    res.send("Tousif ji")
})
app.get('/google',(req, res)=>{
    res.send("Google.com")
})
app.get('/youtube',(req, res)=>{
    res.send ('<h1>tihs is a youtube</h1>')
})
app.get('/login', (req, res)=>{
    res.send('<h2>This is a login page</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})