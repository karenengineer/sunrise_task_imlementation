import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const secret = 'secretOne';

const User = require('../models').User;

module.exports = {
    signup(req, res) {
        return User
            .create({
                username: req.body.username,
                password: bcrypt.hashSync(req.body.password, 8),
            })
            .then((user) => {
                res.status(201).send("User registered successfully!", user);
            })
            .catch(err => {
                res.status(500).send("Error  " + err);
            });
    },
    signin(req, res) {
        return User.findOne({
            where: { username: req.body.username },
        })
            .then((user) => {
                if (!user) {
                    return res.status(404).send('User Not Found.');
                }

                const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
                if (!passwordIsValid) {
                    return res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
                }

                const token = jwt.sign({ id: user.id }, secret, {
                    expiresIn: 86400 // expires in 24 hours
                });
                return res.status(200).send({ auth: true, accessToken: token });

            })
            .catch(err => {
                res.status(500).send('Error  ' + err);
            });
    },
};
