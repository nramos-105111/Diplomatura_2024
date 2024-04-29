var pool = require('./bd');

async function getProductos(){
    var query = 'select * from producto';
    var rows = await    pool.query(query);
    return rows;
}

async function insertProductos(obj){
    try {
        var query = 'insert into producto set ?';
        var rows = await pool.query(query,[obj])
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {getProductos, insertProductos }