import { useRef } from "react"

export default function Form(props)
{
    // const { text, setText } = props
    const { movieSearch } = props

    const searchRef = useRef(null)

    // const handleKeyDown = (e) =>
    // {
    //     console.log(e)
    //     setText(prevText => prevText + e.key)
    // }

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        console.log(`submitting search for ${searchRef.current.value}...`)
        movieSearch(searchRef.current.value)
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    ref={searchRef}
                    type="text"
                    placeholder="Movie title goes here"
                    /* onKeyDown={handleKeyDown} 
                    value={text} */ />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
