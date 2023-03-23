const { User } = require('../db.js');


module.exports = {
    userCreator: async ({name, image}) => {
        await User.create({
            name, 
            image
        });
    },
    getAUser: async (id) => {
        return await User.findByPk(id)
    },
    getUsers: async () => {
        return await User.findAll()
    },
}