const express = require('express');

require('dotenv').config()

const app = express()

const port = process.env.APP_PORT || 6000

const appRouter = require('./router')

app.use("/api", appRouter)

app.listen(port, (err) => {
    if(err) console.error('Something is wrong')

    console.log(`Server is running on port ${port}`)
})