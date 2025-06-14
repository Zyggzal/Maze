const bcrypt = require('bcrypt');

module.exports = {
    hash(password) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        return hash;
    },

    validate(password, hash) {
        return bcrypt.compareSync(password, hash);
    }
};