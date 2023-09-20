const express = require('express');
const app = express();
const fs = require('fs');
const fs = require('fs');

// Config
const port = 3000
const dir = `${__dirname}/images`

// The "code"
app.get('/', (req, res) => {
    fs.readdir(dir, (err, files) => {
        if(err) throw err
        const file = files[Math.floor(Math.random() * files.length + 1)]
        res.sendFile(`${dir}/${file}`)
    })
})

// Starts the web server
app.listen(port, () => {
    console.log(`random-image listening on port ${port}`)
})