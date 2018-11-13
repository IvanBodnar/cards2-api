const Theme = require('../models/theme.model');

// TODO try catch

const saveTheme = async (req, res, next) => {
  const name = req.body.name;
  const theme = new Theme({name: name});
  theme.save()
      .then(
          theme => res.send(theme)
      )
};

const themes = async (req, res, next) => {
  const themes = await Theme.find();
  res.send(themes);
};

module.exports = {
    saveTheme: saveTheme,
    themes: themes
};