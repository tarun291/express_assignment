const EndUserRepository = require('../repository/enduser-repository');


class EndUserService {
    constructor() {
        this.EndUserRepository = new EndUserRepository();
    }
    async createEndUser(data) {
        try {
            const EndUser = await this.EndUserRepository.createEndUser(data);
            return EndUser;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async deleteEndUser(EndUserId) {
        try {
            const response = this.EndUserRepository.deleteEndUser(EndUserId);
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async updateEndUser(EndUserId, data) {
        try {
            const EndUser = await this.EndUserRepository.updateEndUser(EndUserId, data);
            return EndUser;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async getEndUser(EndUserId) {
        try {
            const EndUser = await this.EndUserRepository.getEndUser(EndUserId);
            return EndUser;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async getAllEndUser(filter) {
        try {
            const cities = await this.EndUserRepository.getAllEndUser({ name: filter.name });
            return cities;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
}

module.exports = EndUserService;