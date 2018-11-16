const express = require('express');
const themeControllers = require('../controllers/themes.controller');
const cardControllers = require('../controllers/cards.controller');

const router = express.Router();

router.get('/themes', themeControllers.themes);
router.post('/theme', themeControllers.saveTheme);
router.put('/theme', themeControllers.editTheme);
router.delete('/theme_delete/:id', themeControllers.deleteTheme);

router.get('/cards/:themeName', cardControllers.cards);
router.post('/card', cardControllers.saveCard);
router.put('/card', cardControllers.editCard);
router.delete('/card_delete/:id', cardControllers.deleteCard);

module.exports = router;
