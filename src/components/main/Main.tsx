import './Main.css'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <main className="main-content background flex-column g-lg justify-center align-center">
        <div className="main-content-inner">
          <Outlet />
        </div>
    </main>
  )
}

export default Main