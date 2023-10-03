import Home from "./pages/home/Home-sceen";
import Login from "./pages/login/Login";
import Userlist from "./pages/userlist/Userlist";
import Report from "./pages/report/Report"
import Single_user from "./pages/singleuser/Single_user";
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="user-list" >
              <Route index element={<Userlist />} />
              <Route path=":userId" element={<Single_user />} />
            </Route>
            <Route path="report" element={<Report />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
