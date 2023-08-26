const Enduser = require('../models/enduser')

class EnduserRepository {
    async createEnduser(data) { //{name:"Agra"}
        try {
            console.log(data)
            const Enduser = await Enduser.create(data)
            return Enduser;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async deleteEnduser(EnduserId) {
        console.log(EnduserId);
        try {
            await Enduser.destroy({
                where: {
                    id: EnduserId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async updateEnduser(EnduserId, data) {  //{name:"Delhi"} data is an object form here
        try {
            // below approach also work but will not return updated obkject
            // If you are using PG sequal then returning true can be used, else not
            /* const Enduser = await Enduser.update(data, {
                where: {
                    id: EnduserId
                },
             })*/
            /* This approach will return apdated objct also in MySQL*/
            const Enduser = await Enduser.findByPk(EnduserId);
            Enduser.name = data.name;
            await Enduser.save();
            return Enduser;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async getEnduser(EnduserId) {
        try {
            const Enduser = await Enduser.findByPk(EnduserId);
            return Enduser;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
    async getAllEnduser(filter) { // filter can be a empty  also
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
                // console.log(cities);
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