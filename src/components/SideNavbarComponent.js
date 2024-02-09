import React from 'react';
import { Link } from 'react-router-dom';
import plus from '../assets/plus icon.png';

export default function SideNavbarComponent() {
    return (
        <div className='sideNav'>
            <div className='itemsDiv'>
                <div className='navItem '>
                <Link to={'SumPage'} className='link d-flex'>
                  <img src={plus}/>
                <h1 className='navTxt'>THE SUM</h1>  
                </Link>
            </div>
            <div className='navItem '>
                <Link to={'NameTimePage'} className='link d-flex'>
                  <img src='../assets/plus icon.png'/>
                <h1 className='navTxt'>NAME & TIME</h1>  
                </Link>
            </div>
            <div className='navItem '>
                <Link to={'GreaterLessPage'} className='link d-flex'>
                  <img src='../assets/plus icon.png'/>
                <h1 className='navTxt'>GREATER? LESS?</h1>  
                </Link>
            </div>
            <div className='navItem '>
                <Link to={''} className='link d-flex'>
                  <img src='../assets/plus icon.png'/>
                <h1 className='navTxt'>MAD LIB</h1>  
                </Link>
            </div>
            <div className='navItem '>
                <Link to={'OddEvenPage'} className='link d-flex'>
                  <img src='../assets/plus icon.png'/>
                <h1 className='navTxt'>ODD OR EVEN</h1>  
                </Link>
            </div>
            <div className='navItem '>
                <Link to={'ReverseOnePage'} className='link d-flex'>
                  <img src='../assets/plus icon.png'/>
                <h1 className='navTxt'>REVERSE IT I</h1>  
                </Link>
            </div>
            <div className='navItem '>
                <Link to={'ReverseTwoPage'} className='link d-flex'>
                  <img src='../assets/plus icon.png'/>
                <h1 className='navTxt'>REVERSE IT II</h1>  
                </Link>
            </div>
            <div className='navItem '>
                <Link to={''} className='link d-flex'>
                  <img src='../assets/plus icon.png'/>
                <h1 className='navTxt'>8 BALL</h1>  
                </Link>
            </div>
            <div className='navItem '>
                <Link to={''} className='link d-flex'>
                  <img src='../assets/plus icon.png'/>
                <h1 className='navTxt'>RESTAURANTS</h1>  
                </Link>
            </div>
            <div className='navItem '>
                <Link to={''} className='link d-flex'>
                  <img src='../assets/plus icon.png'/>
                <h1 className='navTxt'>SAY HELLO</h1>  
                </Link>
            </div>
            </div>
            
        </div>
    )
}
