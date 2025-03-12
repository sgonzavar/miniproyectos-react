import {Sub} from '../interface/types'
interface Props {
  subs: Array<Sub>
}


const List = ({subs}: Props) =>  {
  const renderList = (): JSX.Element[] => {
    return subs.map(sub => {
      return (
        <li key={sub.avatar}>
          <img src={sub.avatar} alt={`esta es la imagen del sub ${sub.avatar}`} />
          <h4>{sub.nick} ( <small> {sub.subMounths}</small> )</h4>
          <p>{sub.description?.substring(0, 100)}</p>
        </li>
      )
    })
  }

  return (
    <ul>{renderList()}</ul>
  )
}

export default List