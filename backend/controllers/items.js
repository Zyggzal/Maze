const User = require("../db/models/user");
const Item = require("../db/models/item");

module.exports = {
    getItems: async (req, res) => {
        try {
            const items = await Item.find();

            res.status(200).json(items);
        }
        catch(err) {
            res.status(400).json({ error: err.message ? err.message : err });
        }
    },
    getItem: async (req, res) => {
        try {
            const { id } = req.params;

            if(!id) throw 'No item id given';

            const item = await Item.findById(id);

            if(!item) throw 'Item with given id was not found.';

            res.status(200).json(item.toObject());
        }
        catch(err) {
            res.status(400).json({ error: err.message ? err.message : err });
        }
    },
    getItemByName: async (req, res) => {
        try {
            const { name } = req.body;

            if(!name) throw 'No item name given.';

            const item = await Item.findOne({ name });

            if(!item) throw 'Item with given name was not found.';

            res.status(200).json(item.toObject());
        }
        catch(err) {
            res.status(400).json({ error: err.message ? err.message : err });
        }
    },
    addItem: async (req, res) => {
        try {
            const { name, description, image } = req.body;

            if(!name) throw 'Item name is required.';
            if(!image) throw 'Item image is required.';

            const item = new Item({ name, description, image });
            item.save();

            res.status(201).json(item.toObject());
        }
        catch(err) {
            res.status(400).json({ error: err.message ? err.message : err });
        }
    },
    updateItem: async (req, res) => {
        try {
            const { id } = req.params;

            if(!id) throw 'No item id given.';

            await Item.findByIdAndUpdate(id, req.body);

            res.status(200).json({ message: 'Item updated successfully.' });
        }
        catch(err) {
            res.status(400).json({ error: err.message ? err.message : err });
        }
    },
    deleteItem: async (req, res) => {
        try {
            const { id } = req.params;

            if(!id) throw 'No item id given.';

            await Item.findByIdAndDelete(id);

            res.status(200).json({ message: 'Item deleted successfully.' });
        }
        catch(err) {
            res.status(400).json({ error: err.message ? err.message : err });
        }
    },
    getUserItems: async (req, res) => {
        try {
            const { userId } = req.params;

            if(!userId) throw 'No user id given.';

            const user = await User.findById(userId).populate('items');

            if(!user) throw 'User not found';

            res.status(200).json({ items: user.items });
        }
        catch(err) {
            res.status(400).json({ error: err.message ? err.message : err });
        }
    }, 
    addUserItem: async (req, res) => {
        try {
            const { userId } = req.params;
            const { itemId } = req.body;

            if(!userId) throw 'No user id given.';
            if(!itemId) throw 'No item id given.';

            const user = await User.findById(userId);

            if(!user) throw 'User not found';

            user.items.push(itemId);

            await user.save();

            res.status(200).json({ message: "Item added to user's inventory successfully." });
        }
        catch(err) {
            res.status(400).json({ error: err.message ? err.message : err });
        }
    },
    deleteUserItems: async (req, res) => {
        try {
            const { userId } = req.params;
            const { itemId } = req.body;

            if(!userId) throw 'No user id given.';
            if(!itemId) throw 'No item ids given.';

            const user = await User.findById(userId);

            if(!user) throw 'User not found';

            if(Array.isArray(itemId)) {
                user.items = user.items.filter(item => !itemId.includes(item.toString()));
            }
            else {
                user.items.splice(user.items.findIndex(item => item.toString() === itemId), 1);
            }

            await user.save();

            res.status(200).json({ message: "Items removed from user's inventory successfully." });
        }
        catch(err) {
            res.status(400).json({ error: err.message ? err.message : err });
        }
    }
};