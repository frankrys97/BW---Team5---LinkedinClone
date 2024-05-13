import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import './'
function App() {
  return (
    <BrowserRouter>
      {/* <MyNavbar  /> */}
      <Routes>
        {/* <Route path='/' element={}/>
      <Route path='/profile_my'element={} /> 
      <Route path='/profile/:userId' element={} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
