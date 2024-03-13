
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
import RequireAuth from './Pages/RequireAuth'
import CreateCourse from './Pages/Courses/CreateCourse'
import Profile from './Pages/User/Profile'
import EditProfile from './Pages/User/EditProfile'
import Checkout from './Pages/Payment/checkout'
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess'
import CheckoutFail from './Pages/Payment/CheckoutFail'
import DisplayLectures from './Pages/lectures/DisplayLectures'
import AddLecture from './Pages/lectures/AddLecture'
import Dashboard from './Pages/Admin/Dashboard'


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
        <Route element={<RequireAuth allowedRoles={["ADMIN"]}/>}>
            <Route path='/course/create' element={<CreateCourse/>}/>
            <Route path='/course/:id/addlecture' element={<AddLecture/>}/>
            <Route path='/admin/dashboard' element={<Dashboard/>}/> 
        </Route>
        <Route element={<RequireAuth allowedRoles={["ADMIN","USER"]}/>}>
            <Route path='/user/profile' element={<Profile/>}/>
            <Route path='/user/editprofile' element={<EditProfile/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/checkout/success' element={<CheckoutSuccess/>}/>
            <Route path='/checkout/fail' element={<CheckoutFail/>}/>
            <Route path='/course/:_id/displaylectures' element={<DisplayLectures/>}/>
        </Route>
        <Route path='/course/description/:courseId' element={<CourseDescription/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
  )
}
