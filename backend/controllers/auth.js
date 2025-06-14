const User = require("../db/models/user");
const pwd = require('../utils/password');

const sendUser = (user) => {
    const { password, ...sendUser } = user;

    return sendUser;
};

module.exports = {
    register: async (req, res) => {
        try {
            const { login, password, email } = req.body;

            if(!login) throw 'User login is required.';
            if(!password) throw 'User password is required.';
            if(!email) throw 'User email is required.';

            const passwordHash = pwd.hash(password);

            const user = new User({ login, email, password: passwordHash });

            await user.save();

            res.status(201).json(sendUser(user.toObject()));
        }
        catch(err) {
            res.status(400).json({ error: err.message ? err.message : err });
        }
    },
    login: async (req, res) => {
        try {
            const { password, email } = req.body;

            if(!password) throw 'No password given.';
            if(!email) throw 'No email given.';

            const user = await User.findOne({ email });
            if(!user) throw 'Could not find a user with the given email.';
            if(!pwd.validate(password, user.password)) throw 'Wrong password.';

            res.status(200).json(sendUser(user.toObject()));
        }
        catch(err) {
            res.status(400).json({ error: err.message ? err.message : err });
        }
    },
};