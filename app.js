const express = require('express')
const mongoose = require('mongoose')

require('./modals/users')

const app = express()

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/reactdb`);

require('./routes/UsersRoute')(app)

app.use(express.json())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
  
  }

app.listen(5000, () => {
console.log(`app running on localhost:5000`)
});

module.exports = app 