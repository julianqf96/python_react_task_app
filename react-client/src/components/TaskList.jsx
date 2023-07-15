import { useEffect, useState } from "react"
import { getTasks } from "../api/task"
import { TaskCard } from "./TaskCard"

export function TaskList() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await getTasks()
            setTasks(response.data);
        }
        fetchData()
    }, [])

    return (
        <>

            <div className='text-center mb-8 font-semibold text-lg'>Tasks of the moment</div>

            <div className="grid grid-cols-3 gap-3">
                {tasks.map((task, index) => (
                    <TaskCard task={task} key={index} index={index} />
                ))}
            </div>

        </>
    )
}
