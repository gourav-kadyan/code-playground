import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import EditorPage from './pages/EditorPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      {/*make toaster globally so that we can call on any component/page */}
      <div>
        <Toaster position="top-right"
                 toastOptions={{
                  success : {
                    iconTheme : {
                      primary : '#4aed88',
                    },
                  },
                 }}  />  
      </div>
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
