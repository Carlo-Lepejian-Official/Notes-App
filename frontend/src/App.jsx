import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import { Route, Routes } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster />
      <button onClick={() => toast.error("Fail!")}>Click me</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
