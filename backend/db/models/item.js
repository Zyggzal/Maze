const { connection } = require('../db');

const itemSchema = {
    name: {
        type: String, 
        required: [true, 'Item name is required'],
        trim: true
    },
    description: {
        type: String, 
        default: 'No description.'
    },
    image: {
        type: String, 
        required: [true, 'Item image url is required'],
        trim: true
    }
};

const Item = connection.model('Item', itemSchema);

module.exports = Item;