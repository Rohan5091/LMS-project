
import { Route,Routes } from 'react-router-dom'
import './app.css'
import Homepage from './Pages/Homepage'
import AboutPage from './Pages/AboutPage'
import NotFoundPage from './Pages/NotFoundPage'
import SignUp from './Pages/SignUp'
export default function App() {

  return (
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
  )
}
