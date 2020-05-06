const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


//---------Getting data by ingredient from recipes json
app.get('/recipes/:ingredient', function (request, response) {
    const ingredient = request.params.ingredient

    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, data, res) {
        const recipes = JSON.parse(data).results
        response.send(recipes)
    })
})


//--------Sanity check
app.get('/sanity', function (request, response) {
    console.log("Sanity check - All good")
    response.send("OK")
})


//--------Server check
const port = 8080
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})
