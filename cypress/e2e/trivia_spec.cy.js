describe('Trivia', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple', {
      statusCode: 200,
      ok: true,
      body: {
        "question": "Test Question",
        "correct_answer": "Yes",
        "incorrect_answers": ["No", "Maybe", "Kinda"],
        "category": "Test",
        "type": "multiple",
        "difficulty": "easy"
      }
    })
    cy.visit('http://localhost:3000/trivia')
  })

  it('Should be able to render the elements of a question', () => {

  })
})