const JwtStrategy = require('passport-jwt').Strategy;

const { verifyToken } = require('../utils/jwt');

const options = {
    jwtFromRequest: (req) => req && req.cookies ? req.cookies['jwt'] : null,
    secretOrKey: process.env.JWT_SECRET
};

module.exports = passport => {
    passport.use(new JwtStrategy(options, verifyToken));
};