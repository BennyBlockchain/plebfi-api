const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const {boltwall} = require('boltwall')

const app = express()

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    return res.json({returned: true})
})


app.use(boltwall())

app.get('/protected', (req,res) => {
    return res.json({message: "Need auth"})
})
app.listen(5000, () => console.log('listening on port 5000'))