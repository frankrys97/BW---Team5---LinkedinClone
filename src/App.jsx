import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyComponent from './components/IndexMessage'
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyProfile from "../src/components/MyProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <MyComponent />
        <Routes>
    
       
          <Route path="/profile_my" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
