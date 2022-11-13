describe('Trivia page', () => {

  it('Should be able to render the elements of a question', () => {
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

  it.only('Should be able to click to the next question after answering, and then return to the landing page after done', () => {
    cy.intercept('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple', {
        statusCode: 200,
        ok: true,
        fixture: 'game2.json'
    })
    cy.visit('http://localhost:3000/trivia')
    cy.get('[value="Kuwait"]').should('exist').contains('Kuwait').click()
    cy.get('.btn-styling > :nth-child(2)').click()
    cy.get('h3.question-text').should('exist').contains('In the television show Breaking Bad, what is the street name of Walter and Jesse"s notorious product?')
    cy.get('[value="Blue Sky"]').should('exist').contains('Blue Sky')
    cy.get('[value="Baby Blue"]').should('exist').contains('Baby Blue')
    cy.get('[value="Rock Candy"]').should('exist').contains('Rock Candy')
    cy.get('[value="Pure Glass"]').should('exist').contains('Pure Glass').click()
    cy.get('.btn-styling > :nth-child(2)').click()
    cy.get('h3.question-text').should('exist').contains('What is the capital of South Korea?')
    cy.get('[value="Seoul"]').should('exist').contains('Seoul')
    cy.get('[value="Pyongyang"]').should('exist').contains('Pyongyang')
    cy.get('[value="Taegu"]').should('exist').contains('Taegu')
    cy.get('[value="Kitakyushu"]').should('exist').contains('Kitakyushu').click()
    cy.get('.btn-styling > :nth-child(2)').click()
    cy.get('h3.question-text').should('exist').contains('What was the name commonly given to the ancient trade routes that connected the East and West of Eurasia?')
    cy.get('[value="Silk Road"]').should('exist').contains('Silk Road')
    cy.get('[value="Spice Road"]').should('exist').contains('Spice Road')
    cy.get('[value="Clay Road"]').should('exist').contains('Clay Road')
    cy.get('[value="Salt Road"]').should('exist').contains('Salt Road').click()
    cy.get('.btn-styling > :nth-child(2)').click()
    cy.get('h3.question-text').should('exist').contains('In web design, what does CSS stand for?')
    cy.get('[value="Counter Strike: Source"]').should('exist').contains('Counter Strike: Source')
    cy.get('[value="Cascading Style Sheet"]').should('exist').contains('Cascading Style Sheet')
    cy.get('[value="Corrective Style Sheet"]').should('exist').contains('Corrective Style Sheet')
    cy.get('[value="Computer Style Sheet"]').should('exist').contains('Computer Style Sheet').click()
    cy.get('a > .question-btn').click()
    cy.url('http://localhost:3000/')
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