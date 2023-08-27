const EndUserRepository = require('../repository/enduser-repository');


class EndUserService {
    constructor() {
        this.endUserRepository = new EndUserRepository();
    }
    async createEndUser(data) {
        try {
            const endUser = await this.endUserRepository.createEnduser(data);
            return endUser;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async deleteEndUser(endUserId) {
        try {
            const response = await this.endUserRepository.deleteEnduser(endUserId);
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async updateEndUser(endUserId, data) {
        try {
            const endUser = await this.endUserRepository.updateEnduser(endUserId, data);
            return endUser;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async getEndUser(endUserId) {
        try {
            const endUser = await this.endUserRepository.getEnduser(endUserId);
            return endUser;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
    async getAllEndUser(query) {
        try {
            const endusers = await this.endUserRepository.getAllEnduser(query?.page, query?.limit);
            return endusers;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw { error };
        }
    }
}

module.exports = EndUserService;