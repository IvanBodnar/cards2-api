const mongoose = require('mongoose');


const themeSchema = new mongoose.Schema({
   name: {
       type: String,
       trim: true,
       required: 'theme name missing'
   }
});

module.exports = mongoose.model('Theme', themeSchema);
