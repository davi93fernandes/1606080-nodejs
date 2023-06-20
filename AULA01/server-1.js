const http = require ('http')

http.createServer((req, res) => {

    res.end('Ola mundo! - aula 01 parte 02')

}).listen(3033)