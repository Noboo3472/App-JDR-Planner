import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Singin from "./pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<Singin/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;