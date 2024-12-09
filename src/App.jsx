
import './App.css'
import { Route,Routes } from 'react-router-dom'
import LandingPage from '../src/Page/LandingPage'
import Home from './Page/Home'
import SignUp from './Page/SignUp'
import SignIn from './Page/SignIn'


function App() {
  

  return (
    <>
      
      
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
      </Routes>
      {/* <Banner/>
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={actions} title = "Actions" isSmall/>
      <RowPost url={comedy} title = "Comedy Movies" isSmall/> */}
    </>
  )
}

export default App
