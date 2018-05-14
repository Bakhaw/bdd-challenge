const sqlite3 = require('sqlite3').verbose();
import fs from 'fs';

const dbfile = 'test.db';
const db = new sqlite3.Database(dbfile);

if (!fs.existsSync(dbfile)) {
    const users =  require('./models/users');
    db.run(users);
}

export default db;