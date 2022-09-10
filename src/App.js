import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Error404 from './pages/error/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;