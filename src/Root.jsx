import './App.css'
import Sidebar from './components/Sidebar'
import { Outlet } from "react-router-dom"

function Root() {
  return (
    <>
      <div className='grid'>
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default Root
