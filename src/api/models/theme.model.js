const mongoose = require('mongoose');


const themeSchema = new mongoose.Schema({
   name: {
       type: String,
       trim: true,
       required: 'theme name missing'
   }
});

const Theme = mongoose.model('Theme', themeSchema);

module.exports = Theme;

Theme.schema.path('name').validate(
    async function (value) {
        const result = await Theme.findOne({name: value});
        if (result) return false;
    },
    'Theme name already exists'
);