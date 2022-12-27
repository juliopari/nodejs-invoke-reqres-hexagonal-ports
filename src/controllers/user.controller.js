const UserService = require('../services/user.service');
const UserPort = require('../ports/user.port');
const userService = new UserService()

class UserController extends UserPort{

    async listUser(page) {
        return await userService.listUser(page)
    }

    async singleUser(id) {
        return await userService.singleUser(id)
    }

    async createUser(user) {
        return await userService.createUser(user)
    }

}

module.exports = UserController;
