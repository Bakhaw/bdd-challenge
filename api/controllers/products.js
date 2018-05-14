import db from '../../database';

const products = {
    find: (req, res) => {
        db.all('SELECT * from users WHERE mail=?', req.query.name, (err, data) => {
            if (err) res.send(`Operation failed :: ${err}`)
            res.send(`Operation completed ${data[0]}`)
        })
    }
}

export default products;