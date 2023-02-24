import express from 'express'
import path from 'path'

const PORT = 4430
const app = express()

app.use(express.static(path.join(__dirname, '../../dist')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'))
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
