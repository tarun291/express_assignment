const User = require('../models/user')

class UserRepository {
    async createUser({ name }) { //{name:"Agra"}
        try {
            const User = await User.create({
                name: name //name
            })
            return User;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async deleteUser(UserId) {
        console.log(UserId);
        try {
            await User.destroy({
                where: {
                    id: UserId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async updateUser(UserId, data) {  //{name:"Delhi"} data is an object form here
        try {
            // below approach also work but will not return updated obkject
            // If you are using PG sequal then returning true can be used, else not
            /* const User = await User.update(data, {
                where: {
                    id: UserId
                },
             })*/
            /* This approach will return apdated objct also in MySQL*/
            const User = await User.findByPk(UserId);
            User.name = data.name;
            await User.save();
            return User;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async getUser(UserId) {
        try {
            const User = await User.findByPk(UserId);
            return User;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
    async getAllUser(filter) { // filter can be a empty  also
        try {
            if (filter.name) {
                console.log(filter.name)
                const cities = await User.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                })
                // console.log(cities);
                return cities;
            }
            const cities = await User.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
}

module.exports = UserRepository;