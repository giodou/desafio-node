const userModel = require('../models/userModel');

function insertUser(user) {
    return userModel.create(user);
}

function getUsers() {
    return userModel.findAll();
}

module.exports = {
    insertUser,
    getUsers
}
