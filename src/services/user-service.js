const  UserRepository  = require('../repository/user-repository');


class UserService {
    constructor() {
        this.UserRepository = new UserRepository();
    }
    async createUser(data) {
        try {
            const User = await this.UserRepository.createUser({ name: data.name });
            return User;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async deleteUser(UserId) {
        try {
            const response = this.UserRepository.deleteUser(UserId);
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async updateUser(UserId, data) {
        try {
            const User = await this.UserRepository.updateUser(UserId, data);
            return User;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async getUser(UserId) {
        try {
            const User = await this.UserRepository.getUser(UserId);
            return User;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async getAllUser(filter) {
        try {
            const cities = await this.UserRepository.getAllUser({ name: filter.name });
            return cities;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
}

module.exports = UserService;