const express = require("express")
const app = express()


const movies= [
    {title: "Twilight", genre: "Fantasy"},
    {title: "Avengers", genre: "Action"},
    {title: "Just Friends",genre: "Romantic Comedy"}
]
const tv= [
    {title: "The Orginals", genre: "Fantasy/Supernatural"},
    {title: "90 day fiance", genre: "Reality"},
    {title: "This is Us", genre: "Dramedy"}
]
const foreignFilm= [
    {title: "Roma", genre: "Drama"},
    {title: "Crouching tiger hidden dragon", genre: "Action/Adventure"},
    {title: "A Seperation", genre: "Drama"}

]


app.get("/movies", (req,res) => {
    res.send(movies)

})
app.get("/tv", (req,res) => {
    res.send(tv)

})
app.get("/foreignFilm", (req,res) => {
    res.send(foreignFilm)

})


app.listen(4000, () => {
    console.log("The server is running on Port 4000")

})