describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
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

// Navigation
// should be able to click the links and see the URL update

// Form
// Should set the difficulty and be taken to the first question
// intercept/stub first question