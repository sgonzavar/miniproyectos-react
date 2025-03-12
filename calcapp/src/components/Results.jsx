import React from 'react'
import PropTypes from 'prop-types'

const Results = ({value}) => {
    return (
        <div className="result">
            <span>{value}</span>
        </div>
    )
}

Results.propTypes = {
    value: PropTypes.string.isRequired
}

Results.defaultProps = {
    value: "0"
}

export default Results 
