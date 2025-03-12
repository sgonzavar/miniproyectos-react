import style from '@emotion/styled'
import { useState, useEffect } from 'react'
import { Word } from './components/word'

const Button = style.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 2rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  border-radius: 8px;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`

const Container = style.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;
`

const App = () => {

  const [word, setWord] = useState({})

  const searchApi = async() => {
    const api = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const word = await api.json()
    setWord(word[0])
  }

  useEffect(() => {
    searchApi()
  }, [])
  

  return (
    <Container>
      <Word wordApi={word} />
      <Button onClick={searchApi}>
        breaking bad
      </Button>
    </Container>
  )
}

export default App
