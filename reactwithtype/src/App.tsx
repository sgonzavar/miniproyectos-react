import { useEffect, useState, useRef } from 'react'
import './App.css';
import List from './components/List'
import Form from './components/Form'
import {Sub} from './interface/types'


interface AppState {
  subs: Array<Sub>
  newSubs: number
}

const INITIAL_STATE = [
  {
    nick: 'dalape',
    subMounths: 2,
    avatar: 'https://i.pravatar.cc/150?u=dalape',
    description: 'lorem impus rejs acepw qwjdqv',
  },
  {
    nick: 'pepi ',
    subMounths: 5,
    avatar: 'https://i.pravatar.cc/150?u=pepi',
    description: 'lorem impus rejs acepw qwjdqv',
  }
]

const App = () => {

  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubs, setNewSubs] = useState<AppState["newSubs"]>(0)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  const divRef = useRef<HTMLDivElement>(null);

  const handleNewSub = (newSubs: Sub): void => {
    setSubs(subs => [...subs, newSubs])
  } 

  return (
    <>
      <div className="App" ref={divRef}>
        <h1>Dev Subs</h1>
      </div>
      <List subs={subs} />
      <Form onNewSub={handleNewSub}/>
    </>
  )
}

export default App