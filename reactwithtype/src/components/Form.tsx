import { useState } from "react"
import {Sub} from '../interface/types'

interface FormState {
  inputValue: Sub
}

interface FormProps {
  onNewSub: (newSubs: Sub) => void
}

const Form = ({onNewSub}: FormProps) => {
  const [inputValue, setInputValue] = useState<FormState['inputValue']>({
    nick: '',
    avatar: '',
    subMounths: 0,
    description: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValue)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValue.nick} type="text" name="nick" placeholder="nick" />
        <input onChange={handleChange} value={inputValue.subMounths} type="number" name="subMounths" placeholder="subMounths" />
        <input onChange={handleChange} value={inputValue.avatar} type="text" name="avatar" placeholder="avatar" />
        <textarea onChange={handleChange} value={inputValue.description} name="description" placeholder="description" />
        <button>Save new Sub!</button>
      </form>
    </div>
  )
}

export default Form