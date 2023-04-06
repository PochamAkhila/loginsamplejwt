import "./App.css";
import LoginPage from "./LoginPage";
// import Signup from "./Signup";
// import PrivateRoute from "./PrivateRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import { Navigate } from "react-router-dom";

function App() {

  const token = localStorage.getItem("jwtToken");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={token ? <LoginPage /> : <Navigate to="/dashboard" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
