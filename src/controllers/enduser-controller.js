const EndUserService = require('../services/enduser-service');


const endUserService = new EndUserService();

const create = async (req, res) => {
    try {
        const EndUser = await endUserService.createEndUser(req.body);
        return res.status(201).json({
            data: EndUser,
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
// DELETE -> /EndUser/:id

const destroy = async (req, res) => {
    try {
        const response = await endUserService.deleteEndUser(req.params.id);
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
// GET -> /EndUser/:id
const get = async (req, res) => {
    try {
        const response = await endUserService.getEndUser(req.params.id);
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

// -> /EndUser/:id -> req.body
const update = async (req, res) => {
    try {
        const response = await endUserService.updateEndUser(req.params.id, req.body);
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
        const cities = await endUserService.getAllEndUser(req.query);
        console.log(req.query);
        return res.status(200).json({
            data: cities,
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