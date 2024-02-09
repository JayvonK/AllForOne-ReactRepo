import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import SideNavBarComponent from './components/SideNavbarComponent';
import SumPageComponent from './components/SumPageComponent';

function App() {
  return (
    <BrowserRouter>
    <HeaderComponent/>
    <SideNavBarComponent/>
    <SumPageComponent/>
    <Routes>



    </Routes>
    </BrowserRouter>
  );
}

export default App;
