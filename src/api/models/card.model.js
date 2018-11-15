const mongoose = require('mongoose');


const cardSchema = new mongoose.Schema({
    front: {
        type: String,
        required: 'Card front text missing'
    },
    back: {
        type: String,
        required: 'Card back text missing'
    },
    themeId: {
        type: String,
        required: 'Card theme id missing'
    }
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;