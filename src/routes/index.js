

const routes = (server) => {

    server.get(`/`, (req, res, next) => {
        res.status(200).json({status: 'OK'})
    })
}

module.exports = routes