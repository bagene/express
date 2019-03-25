const axios = require('axios');
const url = 'https://app.asana.com/api/1.0';
const User = require('../models/user.model');

function get(req, res, next) {
    const { id } = req.params;

    User.get(id).then((user) => {
        if(user) {
            res.json(user);
        } else {
            res.status(404).json("No User Found!");
        }
    }).catch((err) => {
        res.status(500).json("Internal Error");
    });
}

module.exports = { get };