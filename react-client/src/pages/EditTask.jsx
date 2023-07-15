import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { deleteTask, updateTask } from "../api/task";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";


export function EditTask() {

    const location = useLocation()

    const { id } = location.state

    const [done, setDone] = useState(location.state.done)

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm()

    useEffect(() => {
        setValue('title', location.state.title)
        setValue('description', location.state.description)
    }, [])

    const onHandleSubmit = handleSubmit(async (data) => {
        data.done = done
        data.id = id

        const response = await updateTask(data);
        toast.success('Task updated successfully')
        navigate('/tasks')
    })

    const handleDelete = async (id) => {
        const response = await deleteTask(id);
        toast.success('Task deleted successfully')
        navigate('/tasks')
    }

    return (
        <>
            <div className='text-center mb-5 font-semibold text-lg'>Edit Task</div>

            <form
                className="flex flex-col mx-auto"
                onSubmit={onHandleSubmit}>
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
                    className='rounded mb-5 py-2 px-1 text-black'
                    rows={3}
                    placeholder="Description"
                    {...register('description', { required: true })}
                />
                {errors.description && <span>Field required</span>}

                <div className="flex flex-row align-center mb-5">
                    <label className='mr-3' htmlFor="doneCheckbox">Mark as done</label>
                    <input
                        className='rounded'
                        name="doneCheckbox"
                        type="checkbox"
                        checked={done ? true : false}
                        value={done}
                        onChange={() => setDone(!done)}
                    />
                </div>

                <button className='rounded bg-green-300 px-10 py-3 mb-5'>Save</button>
            </form>


            <button className='rounded bg-red-300 px-10 py-3 mx-auto w-full' onClick={() => {
                const accepted = window.confirm('Are you sure you want to delete this task?')
                if (accepted) {
                    handleDelete(id)
                }
            }} >
                Delete
            </button>

        </>
    )
}

