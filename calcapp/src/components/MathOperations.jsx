import React from 'react'
import PropTypes from 'prop-types'
import Buttons from './Buttons'

const MathOperations = ({ onClickOperation, onClickEqual }) => {
    return (
        <section className="math-operations">
            <Buttons type="" text="+" clickHandler={onClickOperation} />
            <Buttons type="" text="-" clickHandler={onClickOperation} />
            <Buttons type="" text="*" clickHandler={onClickOperation} />
            <Buttons type="" text="/" clickHandler={onClickOperation} />
            <Buttons type="" text="=" clickHandler={onClickEqual} />
        </section>
    )
}

MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired,
}

export default MathOperations
