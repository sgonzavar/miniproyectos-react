import { useState } from 'react'
import '../styles/Form.css'
export const Form = ({ search, setSearch, setConsult }) => {


    const [error, seterror] = useState(false)
    const [searchForm, setSearchForm] = useState({
        city: '',
        country: ''
    })

    const { city, country } = searchForm

    const handleChange = e => {
        setSearchForm({
            ...searchForm,
            [e.target.name]: e.target.value
        })
        setSearch(searchForm)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (city.trim() === '' || country.trim() === '') {
            seterror(true)
            return
        }
        seterror(false)
        setConsult(true)
    }



    return (
        <form className='form-container' onSubmit={handleSubmit}>

            {error ? <p className="error">All fields are required</p> : null}

            <div className="input-field">
                <label htmlFor="city">City:</label>
                <input type="text" name="city" id="city" value={city} onChange={handleChange} />
            </div>

            <div className='select-field'>
                <label htmlFor="country">Country:</label>
                <select name="country" id="country" value={country} onChange={handleChange}>
                    <option value="">-- Select a country --</option>
                    <option value="US">United States</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Peru</option>
                </select>
            </div>

            <div className="send-field">
                <input type="submit" value="Search" className="waves-effect waves-light btn-large btn-block yellow accent-4" />
            </div>
        </form>
    )
}

