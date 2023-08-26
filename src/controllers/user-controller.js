const  UserService  = require('../services/user-service');


const userService = new UserService();

const create = async (req, res) => {
    try {
        const User = await userService.createUser(req.body);
        return res.status(201).json({
            data: User,
            sucess: true,
            message: 'Successfully created a User',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to create a User',
            err: error
        })
    }
}

const destroy = async (req, res) => {
    try {
        const response = await userService.deleteUser(req.params.id);
        return res.status(200).json({
            data: response,
            sucess: true,
            message: 'Successfully deleted a User',
            err: {},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to delete the User',
            err: error,
        })
    }
}

const get = async (req, res) => {
    try {
        const response = await userService.getUser(req.params.id);
        return res.status(200).json({
            data: response,
            sucess: true,
            message: 'Successfully fetched a User',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to get the User',
            err: error,
        })
    }
}

const update = async (req, res) => {
    try {
        const response = await userService.updateUser(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            sucess: true,
            message: 'A User successfully updated ',
            err: {},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to update the User',
            err: error,
        })
    }
}
const getAll = async (req, res) => {
    try {
        const cities = await userService.getAllUser(req.query);
        return res.status(200).json({
            data: cities,
            sucess: true,
            message: 'All User fetched sucessfully ',
            err: {},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to fetch the users',
            err: error,
        })
    }
}
module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}