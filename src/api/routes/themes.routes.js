const express = require('express');
const controllers = require('../controllers/themes.controller');

const router = express.Router();

router.get('/themes', controllers.themes);
router.post('/theme', controllers.saveTheme);
router.delete('/theme_delete', controllers.deleteTheme);

module.exports = router;
