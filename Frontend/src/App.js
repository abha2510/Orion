
import Login from "./Pages/Login";
import MainFAQPage from "./Pages/MainFAQPage";
import QuestionDetailPage from "./Pages/QuestionDetailPage";
import { Routes, Route } from 'react-router-dom';
import Register from "./Pages/Register";
import AdminDashboard from "./Pages/AdminDashboard";
import Navbar from "./Components/Navbar";
import { MainContent } from "./Styles/NavbarStyle";
import PrivateRoute from "./Components/PrivateRoute";
import Logout from "./Pages/Logout";
function App() {
  return (
    <div className="App">
    <Navbar/>
    <MainContent />
      <Routes>
          <Route path="/" element={<MainFAQPage />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/admin" element={<AdminDashboard />}/>
          <Route path="/detail" element={<QuestionDetailPage />} />
          <Route path="/logout" element={<Logout />} />

        </Routes>
    </div>
  );
}

export default App;
