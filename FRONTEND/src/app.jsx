
import { Route,Routes } from 'react-router-dom'
import './app.css'
import Homepage from './Pages/Homepage'
import AboutPage from './Pages/AboutPage'
import NotFoundPage from './Pages/NotFoundPage'
import SignUp from './Pages/SignUp'
import Login from './Pages/loginpage'
import CoursesList from './Pages/Courses/CoursesList'
import Contact from './Pages/Contact'
import DiniedPage from './Pages/DiniedPage'
import CourseDescription from './Pages/Courses/CourseDescription'

export default function App() {

  return (
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/courses' element={<CoursesList/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dinied' element={<DiniedPage/>}/>
        <Route path='/course/description' element={<CourseDescription/>}/>

        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
  )
}
