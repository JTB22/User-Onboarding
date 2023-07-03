describe('User Onboarding Form', () => {

    const url = 'http://localhost:3000/';
    const firstName = () => cy.get('input[name="first_name"]');
    const lastName = () => cy.get('input[name="last_name"]');
    const email = () => cy.get('input[name="email"]');
    const password = () => cy.get('input[name="password"]');
    const terms = () => cy.get('input[name="terms"]');
    const submit = () => cy.get('button[name="submit"]');
    beforeEach(() => {
        cy.visit(url);
    });

    it('can navigate to the site', () => {
        cy.visit(url);
    });

    it('can type in the first name input', () => {
        firstName()
            .should('have.value', '')
            .type('John')
            .should('have.value', 'John');
    });
    
    it('can type in the last name input', () => {
        lastName()
            .should('have.value', '')
            .type('Smith')
            .should('have.value', 'Smith');
    });

    it('can type in the email input', () => {
        email()
            .should('have.value', '')
            .type('sdh@mail.com')
            .should('have.value', 'sdh@mail.com');
    });

    it('can type in the password input', () => {
        password()
            .should('have.value', '')
            .type('password')
            .should('have.value', 'password');
    });

    it('can check the terms of service checkbox', () => {
        terms()
            .should('not.be.checked')
            .check()
            .should('be.checked');
    });

    it('can submit the form', () => {
        firstName().type('John');
        lastName().type('Smith');
        email().type('sdh@mail.com');
        password().type('password');
        terms().check();
        submit().click();
    });

    it('can validate', () => {
        firstName().type('John');
        lastName().type('Smith');
        email().type('sdh@mail.com');
        password().type('password');
        password().clear();
        terms().check();
        cy.contains('Password is required');
    });

});