import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import TeacherHome from "./pages/home/teacherHome/TeacherHome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<TeacherHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
