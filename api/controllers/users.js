import db from '../../database';

const users = {

    // GET
    find: (req, res) => {
        db.all('SELECT * from users', (err, data) => {
            console.log('User: => ', data)
            if (err) res.send(`Operation failed :: ${err}`)
            res.send(data)
        })
    },

    // POST
    create: (req, res) => {
        const { username, mail, age } = req.body;

        db.run('INSERT INTO users VALUES (?, ?, ?)', username, mail, age, (err) => {
            if (err) res.send(`Oups, erreur ${err}`)
            res.send('Utilisateur crée !')
        })
    },

    // DELETE
    delete: (req, res) => {
        db.run('DELETE FROM users WHERE username=?', req.query.username, (err) => {
            if (err) res.send(`Operation failed :: ${err}`);
            res.send('Utilisateur supprimé')
        })
    },

    update: (req, res) => {
        const { username, mail, age } = req.body;

        db.run('UPDATE users SET username = ?, mail = ?, age = ? WHERE username=?', username, mail, age, req.query.username, (err, data) => {
            console.log('UPDATE CALLED', data);
            if (err) res.send(`Erreur ! ${err}`)
            res.send('Utilisateur modifié !')
        })
    }
};

export default users;