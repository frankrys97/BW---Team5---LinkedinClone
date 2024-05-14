import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyComponent from './components/IndexMessage'

function App() {
  return (
    <BrowserRouter>
      {/* <MyNavbar  /> */}
      <Routes>
        <Route path='/' element={<MyComponent />} />
        {/* <Route path='/profile_my'element={} /> 
        <Route path='/profile/:userId' element={} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App