// const splash = require('unsplash');
const express = require('express');
const randomFile = require('select-random-file');
const app = express();

// Config:
const port = 42069

const dir = `${__dirname}/wallpapers`

//Config end

app.get('/', (req, res) => {
    randomFile(dir, (err, file) => {res.sendFile(`${dir}/${file}`)})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })