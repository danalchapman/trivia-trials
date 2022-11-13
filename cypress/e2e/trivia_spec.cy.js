// describe('Trivia page', () => {

//   it('Should be able to render the elements of a question', () => {
//     cy.intercept('GET', 'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple', {
//       statusCode: 200,
//       ok: true,
//       body: {
//         "question": "Test Question",
//         "correct_answer": "Yes",
//         "incorrect_answers": ["No", "Maybe", "Kinda"],
//         "category": "Test",
//         "type": "multiple",
//         "difficulty": "easy"
//       }
//     })
//     cy.visit('http://localhost:3000/trivia')

//     cy.get('h3.question-text')
//     cy.get('[value="Yes"]')
//     cy.get('[value="No"]')
//     cy.get('[value="Maybe"]')
//     cy.get('[value="Kinda"]')
//     cy.get('.btn-styling > :nth-child(1)')
//     cy.get('[disabled=""]')
//     cy.get('p.question-text')
//   })
// })

// describe('Failed Request', () => {
//   it('Should display an error message if the GET request fails', () => {
//     cy.intercept('GET', 'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple', {
//       statusCode: 404,
//       ok: false
//     })
//     cy.visit('http://localhost:3000/trivia')
//     cy.get('.error-msg').contains('Oops. 404. Try again.')
//   })
// })