import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyProfile from "../src/components/MyProfile";
import MyFooter from "./components/MyFooter";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        {/* <MyNavbar  /> */}
        <Routes>
          {/* <Route path="/" element={} /> */}
          <Route path="/profile_my" element={<MyProfile />} />
          {/* <Route path='/profile/:userId' element={} /> */}
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
