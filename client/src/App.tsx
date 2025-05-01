import {HomePage } from './components/pages/homePage';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="">
        <BrowserRouter>
          <Routes>
             <Route path='/' element={ <HomePage /> }/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
