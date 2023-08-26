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
                    enduserId: enduserId
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
                    enduserId: enduserId
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


    async getAllEnduser(filter) {
        try {
            if (filter.name) {
                console.log(filter.name)
                const cities = await Enduser.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                })
                return cities;
            }
            const cities = await Enduser.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
}

module.exports = EnduserRepository;