import { useNavigate }  from 'react-router-dom'
export const TaskCard = ({task}) => {
  
  const navigate = useNavigate()
  return (
    <div
      className='bg-zinc-800 p-3 rounded-lg shadow-lg 
      hover:bg-zinc-700 cursor-pointer'
      onClick={() => navigate(`/tasks/${task.id}`)}
    >
      <h2 className='font-bold uppercase'>{task.title}</h2>
      <p className='text-slate-400'>{task.description}</p>
    </div>
  )
}
