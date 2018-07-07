const IndexService = require('../../src/services/index');
const fields = require('../../src/mock/fields.json');

describe('Controllers: Index', () => {
  describe('Get fields: getFields()', () => {
    it('should return a list of fields', () => {
      const Fields = {
        findAll: td.function(),
      };

      const expectedResponse = fields;

      td.when(Fields.findAll()).thenResolve(expectedResponse);
      const indexService = new IndexService();

      indexService.getFields()
        .then(response => expect(response.data).to.be.eql(expectedResponse))
    });
    it('should return a list of fields ERROR', () => {
        const Fields = {
            findAll: td.function(),
        };
  
        td.when(Fields.findAll()).thenReject(undefined);
        const indexService = new IndexService();
  
        indexService.getFields()
          .catch(err => expect(err).to.be.undefined)
      });
  });
});