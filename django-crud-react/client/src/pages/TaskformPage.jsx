import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { createTask, deleteTask, updateTask, getTask } from '../api/task.api'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
export const TaskformPage = () => {

  const { register, handleSubmit, formState: { errors }, setValue } = useForm()
  const navigate = useNavigate()
  const params = useParams()

  const onSubmit = handleSubmit(async data => {
    if (params.id) {
      await updateTask(params.id, data)
      toast.success('Task updated')
    } else {
      await createTask(data)
      toast.success('New task added')
    }
    navigate('/tasks')
  })

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const res = await getTask(params.id)
        setValue('title', res.data.title)
        setValue('description', res.data.description)
      }
    }
    loadTask()
  }, [])

  return (
    <div className='max-w-xl mx-auto'>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          className='bg-zinc-700 p-3 rounded-lg block shadow-lg text-white
          focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full mb-3'
          {...register("title", { required: true })}
        />
        {errors.title && <span>Title is required</span>}

        <textarea
          rows="3"
          placeholder="Description"
          className='bg-zinc-700 p-3 rounded-lg block shadow-lg text-white
          focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full mb-3'
          {...register("description", { required: true })}
        >
        </textarea>
        {errors.description && <span>Description is required</span>}

        <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>
          Save
        </button>
      </form>

      {
        params.id &&
        <div className='flex justify-end'>
          <button
            className='bg-red-500 p-3 rounded-lg block w-48 mt-3'
            onClick={async () => {
              const accept = window.confirm('Are you sure?')
              if (accept) {
                await deleteTask(params.id)
                toast.success('Task deleted')
                navigate('/tasks')
              }
            }}>Delete</button>
        </div>

      }
    </div>
  )
}
