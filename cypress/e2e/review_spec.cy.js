describe('Review page', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple', {
      statusCode: 200,
      ok: true,
      body: [{
        "question": "Test Question",
        "correctAnswer": "Yes",
        "incorrectAnswers": ["No", "Maybe", "Kinda"]
      }]
     })
  })
  
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
  
  // it('Should a user delete a saved question, it disappears from the DOM', () => {
    

  // })

})
