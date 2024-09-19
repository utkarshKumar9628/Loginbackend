const mongoose = require('mongoose');
const Account = mongoose.model('accounts');

module.exports = app => {

// Routes
app.get('/account', async (req, res) => {
    const { username: rUsername, password: rPassword } = req.query;
    if (rUsername == null || rPassword == null) {
        res.send("Invalid credentials");
        return;
    }

    var userAccount = await Account.findOne({ username: rUsername });
    if (userAccount == null) {
        // Create a new account
        console.log("Create a new account");
        var newAccount = new Account({
            username: rUsername,
            password: rPassword,
            lastAuthentication: Date.now()
        });
        await newAccount.save();
        res.send(newAccount);
        return;
    } else {
        if (rPassword == userAccount.password) {
            userAccount.lastAuthentication = Date.now();
            await userAccount.save();
            res.send(userAccount);
        } 
    }

    res.send('hello');
});

}