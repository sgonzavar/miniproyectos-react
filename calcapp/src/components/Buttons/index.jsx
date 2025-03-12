import React from 'react'
import PropTypes from 'prop-types'

//styles
import './Buttons.css'

const Buttons = ({type, text, clickHandler}) => {

    return (
        <button className={type} onClick={() => clickHandler(text)}>
            <span>{text}</span>
        </button>
    )
}

Buttons.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
}

// Button.defaultProps = {
//     type: "0",
//     text: "0",
//     clickHandler: "0",
// }

export default Buttons
