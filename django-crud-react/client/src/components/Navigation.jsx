import {Link} from 'react-router-dom'
export const Navigation = () => {
  return (
    <div className='flex justify-between py-4'>
      <Link to={'/tasks'}><h2 className='font-bold text-3xl mb-4'>Task App</h2></Link>
      <button className='bg-indigo-500 px-2 py-1 rounded-lg'>
        <Link className='font-bold ' to={'/tasks-create'}>Create Tasks</Link>
      </button>
    </div>
  )
}
