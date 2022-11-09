export const getData = () => {
    fetch('')
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status}`)
            } else {
                return response.json()
            }
        })
}