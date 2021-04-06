const express = require('express');
const oracle = require('oracledb');

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.use('/api/post', (req, res, next) => {
    const conn = oracle.createPool(
        {
            user: 'c##xuanvy',
            password: 'vychuoi123',
            connectString: 'localhost:1521/orcl'
        },
        (err, pool) => {
            if(err) throw err;
            pool.getConnection((err, connection) => {
                if(err) {
                    console.log('Fail !!!');
                };
                connection.execute(`select * from IUser`, (err, result) => {
                    if(err) throw err;
                    console.log('Success !!!');
                    res.status(200).json(result.rows);
                    doRelease(connection);
                })
            })
            
        }
    );
});

// Hàm giải phóng đối tượng kết nối Oracle
function doRelease(connection)
{
    connection.release(
            function(err) {
                if (err) { console.error(err.message); }
            });
}

module.exports = app;