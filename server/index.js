const express = require('express')
const app = express()

const PORT = 3000

// middleware
app.use(express.json())

// routes
app.get('/', (req, res) => {
  res.send('Server is running 🚀')
})

// start server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})