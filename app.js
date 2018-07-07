const server = require('./server');
const config = require('./config');

server.listen(config.port, () => {

    console.log(`App running on port ---> ${config.port}`)
})