const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, 'static')))

app.get('/api/delay', (req, res) => {
    setTimeout(() => {
        res.send({
            delayed: true
        })
    }, 1000)
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
