import React from 'react'
import PropTypes from 'prop-types'
import Buttons from './Buttons'

const Functions = ({onContentClear, onDelete}) => {
    return (
        <section className="functions">
            <Buttons type="button-long-text" text="Clear" clickHandler={onContentClear} />
            <Buttons type="" text="&larr;" clickHandler={onDelete} />
        </section>
    )
}

Function.propTypes = {
    onContentClear: PropTypes.func,
    onDelete: PropTypes.func
}

export default Functions
