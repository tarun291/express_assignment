const User = require('../models/user')
const { Op } = require('sequelize');
class UserRepository {
    async createUser(data) {
        try {
            console.log(data)
            const user = await User.create(
                data
            )
            return user;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async deleteUser(userId) {
        console.log(userId);
        try {
            await User.destroy({
                where: {
                    userId: userId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async updateUser(userId, data) {
        try {
            return await User.update(data, {
                where: {
                    userId: userId
                },
            })
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async getUser(userId) {
        try {
            const user = await User.findByPk(userId);
            return user;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
    async getAllUser(page,limit) {
        try {
            page = Number(page) || 1;
            limit = Number(limit) || 3;
            const user = await User.findAll({
                limit: limit * 1,
                offset: (page - 1) * limit
            });
            return user;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
}

module.exports = UserRepository;