'use strict'
module.exports = () => {
    const mongoose = require('../database')()  
    const UserSchema = mongoose.Schema({
        
        userName: {
            type: String,
            require: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
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
        UserSchema.virtual('fullName').
        get(function() { return `${this.firstName} ${this.lastName}` }).
        set(function(fullname) {
            this.firstName = fullname.substring(0, fullname.indexOf(' '))
            this.lastName = fullname.substring(fullname.indexOf(' ') + 1)
            this.set({ firstName, lastName })
    })
    // UserSchema.pre('save', function(next) {
    //     const hash = password         
    //     next()
    // })
    const User = mongoose.model('User', UserSchema)
    return User
}