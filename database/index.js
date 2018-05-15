const sqlite3 = require('sqlite3').verbose();
import fs from 'fs';
import users from './models/users';

const dbfile = 'test.db';
const db = new sqlite3.Database(dbfile);

if (!fs.existsSync(dbfile)) {
    db.run(users);
}

export default db;