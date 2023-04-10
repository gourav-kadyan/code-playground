import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import EditorPage from './pages/EditorPage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path="/editor/:roomID" element={<EditorPage/>} ></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
