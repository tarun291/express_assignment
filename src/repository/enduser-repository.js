const Enduser = require('../models/enduser')

class EnduserRepository {
    async createEnduser(data) { 
        try {
            const enduser = await Enduser.create(data)
            return enduser;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async deleteEnduser(enduserId) {
        try {
            await Enduser.destroy({
                where: {
                    id: enduserId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async updateEnduser(enduserId, data) { 
        try {
            const enduser = await Enduser.update(data, {
                where: {
                    id: enduserId
                },
             })
            return enduser;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async getEnduser(enduserId) {
        try {
            const enduser = await Enduser.findByPk(enduserId);
            return enduser;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }


    async getAllEnduser() {
        try {
            const endusers = await Enduser.findAll();
            return endusers;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
}

module.exports = EnduserRepository;