describe('log in on release and live', () => {
    it('logs on to qa3', () => {
        expect(Cypress.env('QA3')).to.equal('ok')
    })

    const myGreeting = function () {
        alert('hello');
    }
    myGreeting()

    it('has variables FOO and BAR from process.env', () => {
        // FOO=42 BAR=baz cypress open
        // see how FOO and BAR were copied in "cypress/plugins/index.js"
        expect(Cypress.env()).to.contain({
            FOO: '42',
            BAR: 'baz',
        })
    })





})