const Theme = require('../models/theme.model');

// TODO check error status

const themes = async (req, res, next) => {
    try {
        const themes = await Theme.find({}, '_id name');
        res.send(themes);
    }
    catch (e) {
        res.status(404).send(e);
    }
};

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

const deleteTheme = async (req, res, next) => {
    try {
        const id = req.body.id;
        const deletedTheme = await Theme.findByIdAndRemove(id);
        res.send(deletedTheme);
    } catch (e) {
        res.send(e);
    }
};


module.exports = {
    saveTheme: saveTheme,
    deleteTheme: deleteTheme,
    themes: themes
};
