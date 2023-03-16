import { useState, useRef } from "react"



export default function Form(props)
{
    const { movieSearch } = props

    const DEFAULT_FORM_STATE = {
        searchTerm: '',
        username: ''
    }

    // useful to store form data as an object so that we don't need state for each input/piece of data being tracked
    const [formData, setFormData] = useState(DEFAULT_FORM_STATE)

    const searchRef = useRef(null)
    const usernameRef = useRef(null)

    const handleChange = (e) =>
    {
        setFormData(prevData =>
        {
            // set formData to object with all previous values, but overwrite value of key where key is equal to the name assigned to the given input
            return { ...prevData, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        for (let [key, value] of Object.entries(formData))
        {
            console.log(`key: ${key}  value: ${value}`)
        }
        movieSearch(formData.searchTerm)
        setFormData(DEFAULT_FORM_STATE)
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    ref={searchRef}
                    type="text"
                    placeholder="Movie title goes here"
                    value={formData.searchTerm}
                    name="searchTerm"
                    onChange={handleChange} />
                <input
                    ref={usernameRef}
                    type="text"
                    placeholder="Username goes here"
                    value={formData.username}
                    name="username"
                    onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
