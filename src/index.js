import './helpers/dotenv'

import express from 'express'

const app = express()
const port = process.env.PORT



app.get('/', (req, res) => {
    res.json({ msg: "HelloTHereBitchface" })
})

app.listen(port)