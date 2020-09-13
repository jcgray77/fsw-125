const express = require('express')
const magicRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

const magic = [
    {
        spellName: "Fire Ball",
        element: "Fire",
        continualDamage: true,
        spellCost: 50,
        _id: uuidv4()
    },
    {
        spellName: "Frostbite",
        element: "Ice",
        continualDamage: true,
        spellCost: 4,
        _id: uuidv4()
    },
    {
        spellName: "Lightning",
        element: "Electric",
        continualDamage: false,
        spellCost: 8,
        _id: uuidv4()
    }
]
//Get All
magicRouter.get('/', (req, res) => {
    res.status(200)
    res.send(magic)
})
//Get One
magicRouter.get('/:magicId', (req, res, next) => {
    const magicId = req.params.magicId
    const foundSpell = magic.find(spell => spell._id === magicId)
    if (!foundSpell) {
        const error = new Error("The Item was not found")
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundSpell)
})
// Query: localhost:9000/magic/search/element?element=Fire
magicRouter.get('/search/element', (req, res, next) => {
    const element = req.query.element
    const filteredElement = magic.filter(spell => spell.element === element)
    if (!element) {
        const error = new Error("The Item was not found")
        res.status(500)
        return next(error)
    }
    res.send(filteredElement)
})

magicRouter.post('/', (req, res) => {
    const newSpell = req.body
    newSpell._id = uuidv4();
    magic.push(newSpell)
    res.status(201).send(newSpell)
})

magicRouter.delete('/:magicId', (req, res) => {
    const magicId = req.params.magicId
    const magicIndex = magic.findIndex(spell => spell._id === magicId)
    magic.splice(magicIndex, 1)
    res.send("Spell removed")
})

magicRouter.put('/:magicId', (req, res) => {
    const magicId = req.params.magicId
    const magicIndex = magic.findIndex(spell => spell._id === magicId)
    const updatedSpell = Object.assign(magic[magicIndex], req.body)
    res.status(201).send(updatedSpell)
})

module.exports = magicRouter