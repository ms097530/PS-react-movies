import { useRef } from "react"

export default function Form(props)
{
    const { movieSearch } = props

    const searchRef = useRef(null)

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        console.log(`submitting search for ${searchRef.current.value}...`)
        movieSearch(searchRef.current.value)
        searchRef.current.value = ''
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    ref={searchRef}
                    type="text"
                    placeholder="Movie title goes here" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
