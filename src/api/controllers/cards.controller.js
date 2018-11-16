const Card = require('../models/card.model');


const cards = async (req, res, next) => {
    try {
        const themeName = req.params.themeName;
        const cards = await Card.find({ themeName: themeName });
        res.send(cards);
    }
    catch (e) {
        res.send(e);
    }
};

const saveCard = async (req, res, next) => {
    try {
        const card = new Card({
            front: req.body.front,
            back: req.body.back,
            themeName: req.body.themeName
        });
        const savedCard = await card.save();
        res.send(savedCard);
    }
    catch (e) {
        res.status(404).send(e);
    }
};

const editCard = async (req, res, next) => {
    try {
        const sentCard = req.body;
        console.log(sentCard._id)
        const updatedCard = await Card.findOneAndUpdate(
            { _id: sentCard._id },
            { front: sentCard.front, back: sentCard.back },
            { new: true, runValidators: true }
        );
        res.send(updatedCard);
    }
    catch (e) {
        res.send(e);
    }
};


module.exports = {
    cards: cards,
    saveCard: saveCard,
    editCard: editCard
};
