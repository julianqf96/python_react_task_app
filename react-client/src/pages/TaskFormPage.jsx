import { useForm } from 'react-hook-form'
import { createTask } from '../api/task';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function TaskFormPage() {

  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onhandleSubmit = handleSubmit(async (data) => {
    const response = await createTask(data);
    toast.success('Task created successfully')
    navigate('/tasks')
  })

  return (
    <>

      <div className='text-center mb-5 font-semibold text-lg'>Create Task</div>

      <form className="flex flex-col mx-auto" onSubmit={onhandleSubmit}>
      <label className='mb-3' htmlFor="title">Title: </label>
        <input
         name="title"
          className='rounded mb-5 text-black py-4 px-1 items-start'
          type="text"
          placeholder="Title"
          {...register('title', { required: true })}
        />
        {errors.title && <span>Field required</span>}
        <label className='mb-3' htmlFor="title">Description: </label>
        <textarea
         name="description"
          className='rounded mb-5 text-black py-4 px-1 items-start'
          rows={3}
          placeholder="Description"
          {...register('description', { required: true })}
        />
        {errors.description && <span>Field required</span>}
        <button className='rounded bg-green-300 px-10 py-3'>Save</button>
      </form>

    </>
  )
}
