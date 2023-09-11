const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json")
    res.writeHead(200);
    res.end('{"name": "Dima", "age": 26}');
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});



var pgp = require('pg-promise')(/*options*/);
var db = pgp(
    'postgres://postgres:123456@localhost:5432/postgres'
);

db.one('SELECT * FROM public."Test" ORDER BY id ASC')
    .then(function (data) {
        console.log('DATA:', data);
    })
    .catch(function (error) {
        console.log('ERROR:', error);
    });

    