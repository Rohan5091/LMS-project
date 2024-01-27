
import { Route,Routes } from 'react-router-dom'
import './app.css'
import Footer from './components/Footer'
import Homelayout from './Layouts/Homelayout'
import Homepage from './Pages/Homepage'
export default function App() {

  return (
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
  )
}
