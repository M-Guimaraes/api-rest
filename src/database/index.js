'use strict'
module.exports = () => {
    const mongoose = require('mongoose')
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', function() {  })

    mongoose.connect('mongodb://localhost/rest-api', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true, 
        useFindAndModify: false,   
    })
    mongoose.Promise = global.Promise  
    return mongoose
}