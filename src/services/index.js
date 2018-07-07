const fields = require('../mock/fields.json');

class IndexService {

    getFields () {
        return Promise.resolve(fields);
    }
}

module.exports = IndexService