describe('Review page', () => {
  
  it('Should have a message if there are no saved questions', () => {
    cy.visit('http://localhost:3000/review')
    cy.get('h2').contains('Turn back... there is nothing for you here.')
    cy.get('.return-home').contains('Return to the surface...').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('Should be able to return home from the review page', () => {
    cy.visit('http://localhost:3000/review')
    cy.get('nav').contains('Home').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
  
  it.only('Should a user delete a saved question, it disappears from the DOM', () => {
    cy.intercept('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple', {
      statusCode: 200,
      ok: true,
      fixture: 'game1.json'
    })
    cy.visit('http://localhost:3000/')
    cy.get('.difficulty-dropdown')
      .select('easy')
      .invoke('val')
      .should('eq', 'easy')
    cy.get('.submit-difficulty').click()
    cy.url('http://localhost:3000/trivia')
    cy.get('.btn-styling > :nth-child(1)').click()
    cy.get('nav')
      .contains('Review').click()
    cy.url('http://localhost:3000/review')
    cy.get('.remove-review').click()
    cy.get('h2').contains('Turn back... there is nothing for you here.')
    cy.get('.return-home').contains('Return to the surface...').click()
  })

})
