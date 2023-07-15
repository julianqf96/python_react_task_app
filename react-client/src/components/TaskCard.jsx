import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns';

export function TaskCard({ task, index }) {

    const navigate = useNavigate()

    return (
        <div key={index}
            className='bg-white p-3 rounded hover:bg-black text-black hover:text-white' >
            <h1 className='text-center mb-5 font-semibold'>Title:
                <span> {task.title}</span>
            </h1>
            <p className='text-center mb-5 font-semibold'>Description:
                <span> {task.description}</span>
            </p>

            <p className='text-center mb-5 font-semibold'>Created at:
                <span> {format(new Date(task.creation_date), 'dd/MM/yyyy - HH:mm')}</span>
            </p>

            <p className='text-center mb-5 font-semibold'>Updated at:
                <span> {format(new Date(task.updated_date), 'dd/MM/yyyy - HH:mm')}</span>
            </p>

            <div className='flex flex-row mb-5 justify-center gap-5 items-center'>

                <button className='rounded bg-green-300 px-10 py-3' onClick={() => navigate(`/task-edit`, { state: task })} >
                    Edit
                </button>

                <div className='rounded'>
                    <span>{task.done
                        ?
                        '✅ Done'
                        :
                        '🕐 Pending'
                    }</span>
                </div>

            </div>
        </div>
    )
}

