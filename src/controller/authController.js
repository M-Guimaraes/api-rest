/* eslint-disable prettier/prettier */
'use strict'

module.exports = ({ userBusiness }) => {
    return {
        createUser: async (req, res) => {
            const user = req.body
            try {
                const result = await userBusiness.createUser(user)
                res.status(200).send(result)
            } catch (err) {
                console.log(err);
                return res.status(400).send({ error: 'User already exists' })
            }
        },
        getAll: async (req, res) => {
            const result = await userBusiness.getAll()
            res.status(200).send(result)
        },
        deleteUser: async (req, res) => {
            const userId = req.params.userId
            const result = await userBusiness.deleteUser(userId)
            res.status(200).send(result)
        },
        updateUser: async ( req, res) => {
            const payload = req.body
            const userId = req.params.userId
            const result = await userBusiness.updateUser(userId,payload)
            res.status(200).send(result)
        },
        
    }
}