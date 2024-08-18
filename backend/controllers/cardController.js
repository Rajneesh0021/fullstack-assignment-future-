const Card = require('../models/card');

// Create a card
exports.createCard = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ message: 'Title and description are required' });
        }

        const newCard = new Card({ title, description });
        await newCard.save();
        res.status(201).json(newCard);
    } catch (error) {
        res.status(500).json({ error: 'Error creating card' });
    }
};

// Get all cards
exports.getAllCards = async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching cards' });
    }
};

// Get a specific card by title
exports.getCardByTitle = async (req, res) => {
    try {
        const { title } = req.params;

        const cards = await Card.find({
            title: { $regex: new RegExp(title, 'i') }
        });

        if (cards.length === 0) {
            return res.status(404).json({ message: 'No matching cards found!' });
        }

        res.json(cards);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching cards' });
    }
};

