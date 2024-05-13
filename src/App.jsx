import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          {/* <Route path='/' element={}/>
      <Route path='/profile_my'element={} /> 
      <Route path='/profile/:userId' element={} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
