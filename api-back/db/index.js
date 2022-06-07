const mongoose = require('mongoose')

const MONGODB_URI = 'mongodb://localhost:27017/coffee'

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    // .then( db => console.log('Database is connected'))
    // .catch(err => console.log(err))


mongoose.connection.on('open', _ =>{
    console.log('database is opened to', MONGODB_URI)
})