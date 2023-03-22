const { User } = require('../db.js');


module.exports = {
    userCreator: async () => {
        await User.create()
    },
    getAUser: async () => {
        await User.findByPk()
    },
    getUsers: async () => {
        await User.findAll()
    },
}