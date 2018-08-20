const express = require('express')
const parser = require('body-parser')

const app = express()

app.listen(3001, () => console.log('listening on port 3001'))
