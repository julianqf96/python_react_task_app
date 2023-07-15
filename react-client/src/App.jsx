import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import TaskPage from './pages/TaskPage'
import { TaskFormPage } from './pages/TaskFormPage'
import { Navigation } from './components/Navigation'
import { EditTask } from './pages/EditTask'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path='/' element={<Navigate to='tasks' />} />
          <Route path='/tasks' element={<TaskPage />} />
          <Route path='/task-create' element={<TaskFormPage />} />
          <Route path='/task-edit' element={<EditTask />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App
