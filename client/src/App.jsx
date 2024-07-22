import "./App.css"
import Login from "./pages/login/login.jsx"
import SignUp from "./pages/signup/signup.jsx";
import Home from "./pages/home/home.jsx";

function App() {
  return (
    <div className="container">
      <div className='p-4 h-screen flex items-center justify-center'>
        <Home />
      </div>
    </div>
  );
}

export default App
