import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyHome from './components/MyHome'

function App() {
  return (
    <div className="App">
      <div className="Container mx-auto">
        <BrowserRouter>
          {/* <MyNavbar  /> */}
          <Routes>
            <Route path="/" element={<MyHome />} />
            {/* <Route path='/profile_my'element={} />  */}
            {/* <Route path='/profile/:userId' element={} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
