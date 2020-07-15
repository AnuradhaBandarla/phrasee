describe('V8 Login Page', function () {


  it('logs in to V8 with valid user credentials', function () {
    cy.request({
      method: 'POST',
      url: 'https://v1.api.release.qa.pur3.net',
      form: true,
      body: {
        username: 'anuradha',
        password: 'puretest123'
      }
    })
  })
})