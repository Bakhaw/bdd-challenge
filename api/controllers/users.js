import db from '../../database';

const users = {
    find: function (req, res) {
        db.all('SELECT * from users WHERE mail=?', req.query.mail, (err, data) => {
            if (err) res.send(`Operation failed :: ${err}`)
            res.send(`Operation completed :: ${data[0]}`)
        })
    },

    create: (req, res) => {
        db.run('INSERT into users values (?)', req.body.mail, (err) => {
            if (err) res.send(`Operation failed :: ${err}`)
            res.send('Operation completed !')
        })
    }
};

export default users;