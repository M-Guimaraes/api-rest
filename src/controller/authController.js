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
        
    }
}