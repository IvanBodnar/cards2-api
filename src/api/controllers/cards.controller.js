const Card = require('../models/card.model');


const cards = async (req, res, next) => {
    try {
        const themeName = req.params.themeName;
        const cards = await Card.find({ themeName: themeName }).sort({ score: 'asc' });
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
            themeName: req.body.themeName,
            score: req.body.score
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
        const updatedCard = await Card.findOneAndUpdate(
            { _id: sentCard._id },
            { front: sentCard.front, back: sentCard.back, score: sentCard.score },
            { new: true, runValidators: true }
        );
        res.send(updatedCard);
    }
    catch (e) {
        res.send(e);
    }
};

const deleteCard = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deletedCard = await Card.findOneAndDelete( { _id: id } );
        res.send(deletedCard);
    }
    catch (e) {
        res.send(e);
    }
};


module.exports = {
    cards: cards,
    saveCard: saveCard,
    editCard: editCard,
    deleteCard: deleteCard
};
