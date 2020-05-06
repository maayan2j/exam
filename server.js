const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))



app.get('/recipes/:ingredient', function (request, response) {
    let ingredient = request.params.ingredient
    console.log(ingredient)
})





app.get('/sanity', function (request, response) {
    console.log("Sanity check - All good")
    response.send("OK")
})


const port = 8080
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})
