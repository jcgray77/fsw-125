const express = require("express");
const bountyRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

// Data
const bounties = [
    {
        firstName: "Sam",
        lastName: "Newman",
        living: true,
        bountyAmount: 1000,
        type: "Sith",
        _id: uuidv4()
    },
    {
        firstName: "John",
        lastName: "Smith",
        living: false,
        bountyAmount: 1500,
        type: "Jedi",
        _id: uuidv4()
    },
    {
        firstName: "Peter",
        lastName: "Jones",
        living: true,
        bountyAmount: 2000,
        type: "Jedi",
        _id: uuidv4()
    },
    {
        firstName: "Joseph",
        lastName: "Thompson",
        living: false,
        bountyAmount: 900,
        type: "Sith",
        _id: uuidv4()
    }
]


bountyRouter.get("/", (req, res) => {
    res.send(bounties)
});

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty);
    res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`)
})

module.exports = bountyRouter