import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'
import HomePage from './navigation/pages/HomePage'
import QuizzesPage from './navigation/pages/QuizzesPage'
import ResultsPage from './navigation/pages/ResultsPage'
import SettingsPage from './navigation/pages/SettingsPage'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <Routes>
          <Route element={<Main />}>
            <Route index element={<HomePage />} />
            <Route path="quizzes" element={<QuizzesPage />} />
            <Route path="results" element={<ResultsPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App