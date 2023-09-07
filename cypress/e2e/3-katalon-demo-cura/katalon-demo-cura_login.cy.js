describe('Login features', () => {
  beforeEach(() => {
    cy.visit('https://katalon-demo-cura.herokuapp.com')
    cy.get('#menu-toggle').click()
    cy.get('.sidebar-nav > :nth-child(4) > a').click()
  })
  it('Login with valid credentials', () => {
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
    cy.get('h2').contains('Make Appointment')
  })

  it('Login with invalid credentials', () => {
    cy.get('#txt-username').type('John Does')
    cy.get('#txt-password').type('ThisIsNotAPasswords')
    cy.get('#btn-login').click()
    cy.get('.text-danger')
      .contains('Login failed! Please ensure the username and password are valid')
  })

  it('Login without input credentials', () => {
    cy.get('#btn-login').click()
    cy.get('.text-danger')
      .contains('Login failed! Please ensure the username and password are valid')
  })
})