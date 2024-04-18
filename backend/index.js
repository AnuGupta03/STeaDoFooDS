const express = require('express')
const app = express()
const port = 5000
const mongoDB =require("./db.js")
const cors=require('cors')
mongoDB();
app.use(express.json())
app.use(cors())
app.use('/api',require("./Routes/CreateUser"))
app.use('/api',require("./Routes/DisplayData"))
app.use('/api',require("./Routes/OrderData"))


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})