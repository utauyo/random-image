const express = require('express');
const randomFile = require('select-random-file');
const app = express();

// Config:
const port = 42069

const dir = `${__dirname}/images`

// The "code"
app.get('/', (req, res) => {
    randomFile(dir, (err, file) => {res.sendFile(`${dir}/${file}`)})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })