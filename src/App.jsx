import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import MainLayout from './components/MainLayout'
import { Routes, Route } from 'react-router-dom'
import Result from './pages/results'
import { useState }  from 'react'
export default function App () {
  const [result, setResult] = useState('')
  return (
    <Routes>
    <Route path="/" element={<MainLayout setResult={setResult}/>} />
    <Route path="/result" element={<Result result={result} />} />
    </Routes>
  )
}
