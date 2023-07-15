import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <div className='nav mb-10 pt-5 flex gap-10 justify-start items-center'>
            <h1 className='text-center font-semibold text-xl'>Task App</h1>
            <Link to='/tasks'>
                <h1 className='text-center font-semibold text-lg'>Tasks</h1>
            </Link>
            <Link to='/task-create' className='text-center font-semibold text-lg'>Create task</Link>
        </div>
    )
}

