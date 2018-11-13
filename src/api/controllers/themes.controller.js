const Theme = require('../models/theme.model');


const saveTheme = async (req, res, next) => {
    try {
        const name = req.body.name;
        const theme = new Theme({name: name});
        const savedTheme = await theme.save();
        res.send(savedTheme);
    }
    catch (e) {
        res.status(404).send(e);
    }
};

const themes = async (req, res, next) => {
    try {
        const themes = await Theme.find();
        res.send(themes);
    }
    catch (e) {
        res.status(404).send(e);
    }
};

module.exports = {
    saveTheme: saveTheme,
    themes: themes
};