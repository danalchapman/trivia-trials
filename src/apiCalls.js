export const getData = (difficulty) => {
    return fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple&encode=url3986`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status}`)
            } else {
                return response.json()
            }
        })
}

// URL for: 10 questions, any category, 
// user-input difficulty, multiple-choice
// https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple&encode=url3986