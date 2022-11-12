export const getData = (difficulty) => {
    return fetch(`https://opentdb.com/api.php?amount=5&difficulty=${difficulty}&type=multiple`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status}`)
            } else {
                return response.json()
            }
        })
}