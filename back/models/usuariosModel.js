var pool = require('./bd');
var md5 = require('md5');

async function getUserByUsernameAndPassword(user, password) {
    try{
        var query = "select * from cliente where cl_usuario = ? and cl_password = ? limit 1";
        var rows = await pool.query(query, [user, md5(password)]);
        return rows[0];
    }catch(error) {
        console.log(error);
    }
}

module.exports = {getUserByUsernameAndPassword}