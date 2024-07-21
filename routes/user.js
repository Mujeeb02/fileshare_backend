const express = require('express');
const User = require('../model/user'); // Correct the path if needed
const router = express.Router();

router.post("/create", async (req, res) => {
    try {
        console.log(req.body)
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user); // Use 201 Created status
    } catch (error) {
        console.error("Error in pushing the data in the database:", error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

module.exports = router;
