import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import SideNavBarComponent from './components/SideNavbarComponent';
import SumPageComponent from './components/SumPageComponent';
import HomePageComponent from './components/HomePageComponent';

function App() {
  return (
    <BrowserRouter>
    <SideNavBarComponent/>
    <HeaderComponent/>
    
    <HomePageComponent/>
    <Routes>



    </Routes>
    </BrowserRouter>
  );
}

export default App;
