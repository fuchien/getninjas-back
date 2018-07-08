describe(`Routes Fields`, () => {

    describe(`Route GET /`, () => {

        it(`should return list of fields`, done => {

            request
                .get(`/`)
                .end((err, res) => {
                    expect(res.body).to.be.an('object');
                    done(err)
                })
        })
    })
})