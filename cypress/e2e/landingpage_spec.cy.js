describe('Landing Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should render the title', () => {
    cy.contains('Trivia Trials')
  })

  it('Should render the navigation bar', () => {
    cy.get('nav')
      .contains('Home')
    cy.get('nav')
      .contains('Review')
  })

  it('Should render the difficulty form', () => {
    cy.get('h2')
      .contains('Ready to Begin?')
    cy.get('.difficulty-dropdown')
      .contains('Easy')
    cy.get('.submit-difficulty')
      .contains('Enter the Dungeon')
    cy.get('.skulls').should('exist')
  })
})

describe('Navigation', () => {

  it('Should be able to click on the links and see the URL update', () => {
    cy.visit('http://localhost:3000/')
      .contains('Review').click()
    cy.url('http://localhost:3000/review')

    cy.contains('Home').click()
    cy.url('http://localhost:3000/')
  })
})

describe('Difficulty Form', () => {

  it('Should be able to pick a difficulty and start the game', () => {
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
  })
})

describe('BadURL', () => {

  it('Should be able to handle a bad URL', () => {
    cy.visit('http://localhost:3000/badUrl')
    cy.get('h2').contains('Halt! You have made an error in your path...')
    cy.get('.home-button').contains('Go back towards the light..').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})