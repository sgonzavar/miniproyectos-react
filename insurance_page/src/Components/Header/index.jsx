import styled from '@emotion/styled'
import PropTypes from 'prop-types'


const ContainHeader = styled.header`
  background-color: crimson;
  padding: 10px;
  font-weight: bold;
  color: white;
`

const TextHeader = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: 'Slabo 27px', serif;
  text-align: center;
`

// eslint-disable-next-line react/prop-types
export const Header = ({ title }) => {
  return (
    <ContainHeader>
      <TextHeader>{ title }</TextHeader>
    </ContainHeader>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}
