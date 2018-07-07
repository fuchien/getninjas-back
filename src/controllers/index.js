const IndexService = require('../services/index');

function IndexController() {

    const indexService = new IndexService()

    this.getFields = async (req, res, next) => {
        try {
            const fields = await indexService.getFields()
            res.status(200).json({status: 'Success'})
        } catch (err) {

        }
    }
}

module.exports = () => new IndexController()