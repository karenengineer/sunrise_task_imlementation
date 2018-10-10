const User = require('../models').User;

const checkDuplicateUserName = (req, res, next) => {
    // -> Check Username is already in use
    User.findOne({
        where: { username: req.body.username },
    })
        .then(user => {
            if (user) {
                res.status(400).send("Fail  Username is already taken!");
                return;
            }
            next();
        });
};

const signUpVerify = {};
signUpVerify.checkDuplicateUserName = checkDuplicateUserName;

module.exports = signUpVerify;
