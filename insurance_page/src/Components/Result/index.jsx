import styled from "@emotion/styled";
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`
const TextQuotation = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`
const ResultContainer = styled.div`
  text-align: center;
  padding: 1rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`

export const Result = ({ quote }) => {

  return (
    (quote === 0)
      ? <Message>Elige marca, año y tipo de seguro</Message>
      : (<ResultContainer>
        <TransitionGroup
          component='span'
          className='resultado'
        >
          <CSSTransition
            classNames='resultado'
            key={quote}
            timeout={{ enter: 500, exit: 500 }}
          >
            <TextQuotation>El total es: $ <span>{quote}</span></TextQuotation>
          </CSSTransition>
        </TransitionGroup>
      </ResultContainer>
      )

  )
}

Result.propTypes = {
  quote: PropTypes.number.isRequired
}