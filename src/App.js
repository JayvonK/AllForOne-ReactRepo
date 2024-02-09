import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>



    </Routes>
    </BrowserRouter>
  );
}

export default App;
