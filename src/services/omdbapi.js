const API_KEY = 'd222b784'
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`

export const getMovie = async (searchTerm) =>
{
    try
    {
        const response = await fetch(`${BASE_URL}t=${searchTerm}`)
        let resBody = await response.json()

        // standardize key values so the first letters are not capitalized
        // TODO: make recursive
        let movieData = {}
        for (let [key, value] of Object.entries(resBody))
        {
            let firstLetterLower = key.charAt(0).toLowerCase()
            let newKey = firstLetterLower + key.slice(1)
            movieData[newKey] = value
        }

        return movieData
    }
    catch (e)
    {
        console.error(e)
    }
}