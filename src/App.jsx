import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap-icons/font/bootstrap-icons.css'
import "./App.css";
import MyComponent from "./components/IndexMessage";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyProfile from "./components/MyProfile";
import MyHome from "./components/MyHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <MyComponent />
        <Routes>
          <Route path="/" element={<MyHome />} />
          <Route path="/profile_my" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
