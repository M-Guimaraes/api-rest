'use strict'

module.exports = () => {
    const mongoose = require('../database')    
    const UserSchema = new mongoose.Schema({
        username: {
            type: String,
            require: true
        },
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        fullname: {
            type: String,
            set() {
                this.setDataValue(
                  'fullName',
                  this.firstName + ' ' + this.lastName
                )
              },
              get() {
                return this.firstName + ' ' + this.lastName
              }
        },
        password: {
            type: String,
            required: true,
            select: false,
        },
        email: {
            type: String,
            require: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
    })
    UserSchema.pre('save', function(next) {
        const hash = password         
        next()
    })
    const User = mongoose.model('User', UserSchema)
    return User
}