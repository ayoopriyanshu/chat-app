import "./App.css"
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/login.jsx"
import SignUp from "./pages/signup/signup.jsx";
import Home from "./pages/home/home.jsx";
import { Toaster } from "react-hot-toast";
import { Useauthcontext } from "./context/authContext.jsx";

function App() {
  const { authUser } = Useauthcontext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to='/login' />}></Route>
        <Route path="/login" element={authUser ? <Navigate to='/' /> : <Login />}></Route>
        <Route path="/signup" element={authUser ? <Navigate to='/' /> : <SignUp />}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App
