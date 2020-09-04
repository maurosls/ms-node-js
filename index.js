const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const logMiddleware =  function (req, res, next){
    console.log("The API received a request!");
    next();
}

app.use(logMiddleware);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})