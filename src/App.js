import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import SideNavBarComponent from './components/SideNavbarComponent';
import SumPageComponent from './components/SumPageComponent';
import HomePageComponent from './components/HomePageComponent';
import NameTimeComponent from './components/NameTimeComponent';
import GreaterLessComponent from './components/GreaterLessComponent';
import OddOrEvenComponent from './components/OddOrEvenComponent';

function App() {
  return (
    <BrowserRouter>
    <SideNavBarComponent/>
    <HeaderComponent/>
    
    <Routes>

    <Route path='/' element={<HomePageComponent/>}/>
    <Route path='SumPage' element={<SumPageComponent/>}/>
    <Route path='NameTimePage' element={<NameTimeComponent/>}/>
    <Route path='GreaterLessPage' element={<GreaterLessComponent/>}/>
    <Route path='OddEvenPage' element={<OddOrEvenComponent/>}/>
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
