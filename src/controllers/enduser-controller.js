const EndUserService = require('../services/enduser-service');


const endUserService = new EndUserService();

const create = async (req, res) => {
    try {
        const endUser = await endUserService.createEndUser(req.body);
        return res.status(201).json({
            data: endUser,
            sucess: true,
            message: 'Successfully created a EndUser',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to create a EndUser',
            err: error
        })
    }
}

const destroy = async (req, res) => {
    try {
        const response = await endUserService.deleteEndUser(req.params.endUserId);
        return res.status(200).json({
            data: response,
            sucess: true,
            message: 'Successfully deleted a EndUser',
            err: {},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to delete the EndUser',
            err: error,
        })
    }
}
const get = async (req, res) => {
    try {
        const response = await endUserService.getEndUser(req.params.endUserId);
        return res.status(200).json({
            data: response,
            sucess: true,
            message: 'Successfully fetched a EndUser',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to get the EndUser',
            err: error,
        })
    }
}


const update = async (req, res) => {
    try {
        const response = await endUserService.updateEndUser(req.params.endUserId, req.body);
        return res.status(200).json({
            data: response,
            sucess: true,
            message: 'A EndUser successfully updated ',
            err: {},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to update the EndUser',
            err: error,
        })
    }
}
const getAll = async (req, res) => {
    try {
        const endusers = await endUserService.getAllEndUser(req.query)
        return res.status(200).json({
            data: endusers,
            sucess: true,
            message: 'All EndUser fetched sucessfully ',
            err: {},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: 'Not able to fetch the cities',
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