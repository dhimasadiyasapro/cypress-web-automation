describe('Make Appointment features', () => {
  it('Make Appointment without login', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com')
    cy.get('#btn-make-appointment').click()
    cy.get('h2').contains('Login')
  })

  context('With login', () => {
    beforeEach(() => {
      cy.visit('https://katalon-demo-cura.herokuapp.com')
      cy.get('#menu-toggle').click()
      cy.get('.sidebar-nav > :nth-child(4) > a').click()
      cy.get('#txt-username').type('John Doe')
      cy.get('#txt-password').type('ThisIsNotAPassword')
      cy.get('#btn-login').click()
      cy.get('h2').contains('Make Appointment')
    })

    it('Make Appointment with all field filled', () => {
      // Input form
      cy.get('#combo_facility').select('Seoul CURA Healthcare Center')
      cy.get('#chk_hospotal_readmission').click()
      cy.get('#radio_program_medicaid').click()
      cy.get('#txt_visit_date').type('10/09/2023')
      cy.get(':nth-child(5) > .col-sm-offset-3').click()
      cy.get('#txt_comment').type('Seoul Hwaiting!!')
      cy.get('#btn-book-appointment').click()
      // Assertions
      cy.get('h2').contains('Appointment Confirmation')
      cy.get('#facility').contains('Seoul CURA Healthcare Center')
      cy.get('#hospital_readmission').contains('Yes')
      cy.get('#program').contains('Medicaid')
      cy.get('#visit_date').contains('10/09/2023')
      cy.get('#comment').contains('Seoul Hwaiting!!')
    })
  
    it('Make Appointment without ticking hospital readmission & program none', () => {
      // Input form
      cy.get('#combo_facility').select('Seoul CURA Healthcare Center')
      cy.get('#radio_program_none').click()
      cy.get('#txt_visit_date').type('10/09/2023')
      cy.get(':nth-child(5) > .col-sm-offset-3').click()
      cy.get('#txt_comment').type('Seoul Hwaiting!!')
      cy.get('#btn-book-appointment').click()
      // Assertions
      cy.get('h2').contains('Appointment Confirmation')
      cy.get('#facility').contains('Seoul CURA Healthcare Center')
      cy.get('#hospital_readmission').contains('No')
      cy.get('#program').contains('None')
      cy.get('#visit_date').contains('10/09/2023')
      cy.get('#comment').contains('Seoul Hwaiting!!')
    })
  })
})