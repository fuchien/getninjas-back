const IndexController = require('../controllers/index')()

const routes = (server) => {

    server.get(`/`, IndexController.getFields.bind(IndexController))
}

module.exports = routes