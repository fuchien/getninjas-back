

function IndexController() {

    this.getFields = (req, res, next) => {
        res.status(200).json({status: 'Success'})
    }
}

module.exports = () => new IndexController()