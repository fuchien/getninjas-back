const IndexService = require('../../src/services/index');
const fields = require('../../src/mock/fields.json');

describe('Controllers: Index', () => {
  describe('Get fields: getFields()', () => {
    it('should return a list of fields', () => {
      const Fields = {
        findAll: td.function(),
      };

      const expectedResponse = fields

      td.when(Fields.findAll()).thenResolve(expectedResponse);
      const indexService = new IndexService();

      indexService.getFields()
        .then(response => expect(response.data).to.be.eql(expectedResponse))
    });
  });
});