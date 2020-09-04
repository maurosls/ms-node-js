const express = require('express')
const app = express()
const port = 3000

//Adding a middleware on the requests
const logMiddleware =  function (req, res, next){
    console.log("The API received a request!");
    next();
}
app.use(logMiddleware);


//Static content return
app.use(express.static("./site"));


//HTTP Requests
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})