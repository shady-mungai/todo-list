import "./App.css";

import UserInfo from "./Biodata";
import TodoAnalytics from "./views/TodoAnalytics";
import Home from "./views/home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analytics" element={<TodoAnalytics />} />
      <Route path="/profile" element={<UserInfo />} />
    </Routes>
  );
}

export default App;
