const Card = require('../models/card.model');


const cards = async (req, res, next) => {
    try {
        const themeId = req.body.themeId;
        const cards = await Card.find({ themeId: themeId });
        res.send(cards);
    }
    catch (e) {
        res.send(e);
    }
};

const saveCard = async (req, res, next) => {
    try {
        let front, back, themeId;
        [front, back, themeId] = [req.body.front, req.body.back, req.body.themeId];
        const card = new Card({
            front,
            back,
            themeId
        });
        const savedCard = await card.save();
        res.send(savedCard);
    }
    catch (e) {
        res.send(e);
    }
};


module.exports = {
    cards: cards,
    saveCard: saveCard
};
