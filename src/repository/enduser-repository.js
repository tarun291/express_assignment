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


    async getAllEnduser(page,limit) {
        try {
            if (page) {
                page = Number(page) || 1;
                limit = Number(limit) || 3;
                const endusers = await Enduser.findAll({
                    limit: limit * 1,
                    offset: (page - 1) * limit
                });
                return endusers;
            }
            const endusers = await Enduser.findAll();
            return endusers;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
}

module.exports = EnduserRepository;