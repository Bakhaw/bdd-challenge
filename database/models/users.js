const username = 'username TEXT not null unique';
const mail     = 'mail TEXT not null unique';
const age      = 'age INTEGER not null'

export default `CREATE TABLE users (${username}, ${mail}, ${age});`;