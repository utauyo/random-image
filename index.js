const express = require('express');
const app = express();
const fs = require('fs');

// Config:
const port = 42069
const dir = `${__dirname}/images`

// The "code"
app.get('/', (req, res) => {
    fs.readdir(dir, (err, files) => {
        if(err) throw err
        const file = files[Math.floor(Math.random() * files.length + 1)]
        res.sendFile(`${dir}/${file}`)
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })