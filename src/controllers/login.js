const allowedUser = require("../utils/allowedUser");

const login = (req, res) => {
    const { email, password } = req.query;
    let access = false;
    allowedUser.forEach((user) => {
        if (user.email === email && user.password === password) {
            access = true;
        }
    });
    return res.json({ access });
}

module.exports = { login };