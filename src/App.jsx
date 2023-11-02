import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="container ">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/todoList" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
