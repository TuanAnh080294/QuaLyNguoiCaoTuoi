const low = require('lowdb');
const fileSync = require('lowdb/adapters/FileSync');

const adapters = new fileSync('data.json');
const db = low(adapters);

db.defaults({
    Sheet1: [],
    user: {}
}).write();

module.exports = db;