'use strict'

module.exports = ({ business }) => {
    const authController = require('./authController')
    
    return {
        authController: authController(business),
    }
}
