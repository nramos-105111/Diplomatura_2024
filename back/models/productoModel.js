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


async function eliminarproductoById(id){
    var query = 'delete from producto where pr_id=?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getProductosId(id){
    var query = 'select * from producto where pr_id=?';
    var rows = await  pool.query(query,[id]);
    return rows[0];
}

async function modificarProductoId(obj,id){
    try {
        var query = 'update producto set ?  where pr_id=?';
        var rows = await pool.query(query, [obj,id]);
        return rows;
    } catch (error) {
        throw error;
    }
}


module.exports = {getProductos, insertProductos, eliminarproductoById,getProductosId,modificarProductoId}