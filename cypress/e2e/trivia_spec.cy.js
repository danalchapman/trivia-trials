describe('Trivia page', () => {

  it.only('Should be able to render the elements of a question', () => {
    cy.intercept('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple', {
      statusCode: 200,
      ok: true,
      fixture: 'game1.json'
    })
    cy.visit('http://localhost:3000/trivia')

    cy.get('h3.question-text').should('exist').contains('Which of the following Arab countries does NOT have a flag containing only Pan-Arab colours?')
    cy.get('[value="Kuwait"]').should('exist').contains('Kuwait')
    cy.get('[value="Qatar"]').should('exist').contains('Qatar')
    cy.get('[value="United Arab Emirates"]').should('exist').contains('United Arab Emirates')
    cy.get('[value="Jordan"]').should('exist').contains('Jordan')
    cy.get('.btn-styling > :nth-child(1)').should('exist').contains('Save for Review')
    cy.get('[disabled=""]').should('exist').contains('Next Question')
    cy.get('p.question-text').should('exist').contains('Score: 0/5')
  })
})

describe('Failed Request', () => {

  it('Should display an error message if the GET request fails', () => {
    cy.intercept('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple', {
      statusCode: 404,
      ok: false
    })
    cy.visit('http://localhost:3000/trivia')
    cy.get('.error-msg').contains('Oops. 404 Try again.')
  })
})