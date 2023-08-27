const UserRepository = require('../repository/user-repository');


class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }
    async createUser(data) {
        try {
            const User = await this.userRepository.createUser(data);
            return User;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async deleteUser(userId) {
        try {
            const response = this.userRepository.deleteUser(userId);
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async updateUser(userId, data) {
        try {
            const user = await this.userRepository.updateUser(userId, data);
            return user;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async getUser(userId) {
        try {
            const user = await this.userRepository.getUser(userId);
            return user;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async getAllUser(query) {
        try {
            const users = await this.userRepository.getAllUser(query?.page, query?.limit);
            return users;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
}

module.exports = UserService;