import React from 'react';
import { Link } from 'react-router-dom';
import plus from '../assets/plus icon.png';
import person from '../assets/person icon.png';
import greater from '../assets/greater icon.png';
import hello from '../assets/hello icon.png';
import food from '../assets/food icon.png';
import reverseOne from '../assets/reverse1 icon.png';
import reverseTwo from '../assets/reverse 2 icon.png';
import text from '../assets/text icon.png';
import odd from '../assets/odd icon.png';
import eightBall from '../assets/8ball icon.png';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import mobile from '../assets/mobile icon.png';

export default function SideNavbarComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className='sideNav'>
        <div className='itemsDiv'>
          <div className='navItem '>
            <Link to={'SumPage'} className='link d-flex'>
              <img className='navImg' src={plus} />
              <h1 className='navTxt'>THE SUM</h1>
            </Link>
          </div>
          <div className='navItem '>
            <Link to={'NameTimePage'} className='link d-flex'>
              <img className='navImg' src={person} />
              <h1 className='navTxt'>NAME & TIME</h1>
            </Link>
          </div>
          <div className='navItem '>
            <Link to={'GreaterLessPage'} className='link d-flex'>
              <img className='navImg' src={greater} />
              <h1 className='navTxt'>GREATER?</h1>
            </Link>
          </div>
          <div className='navItem '>
            <Link to={'MadLibPage'} className='link d-flex'>
              <img className='navImg' src={text} />
              <h1 className='navTxt'>MAD LIB</h1>
            </Link>
          </div>
          <div className='navItem '>
            <Link to={'OddEvenPage'} className='link d-flex'>
              <img className='navImg' src={odd} />
              <h1 className='navTxt'>ODD OR EVEN</h1>
            </Link>
          </div>
          <div className='navItem '>
            <Link to={'ReverseOnePage'} className='link d-flex'>
              <img className='navImg' src={reverseOne} />
              <h1 className='navTxt'>REVERSE IT I</h1>
            </Link>
          </div>
          <div className='navItem '>
            <Link to={'ReverseTwoPage'} className='link d-flex'>
              <img className='navImg' src={reverseTwo} />
              <h1 className='navTxt'>REVERSE IT II</h1>
            </Link>
          </div>
          <div className='navItem '>
            <Link to={'EightBallPage'} className='link d-flex'>
              <img className='navImg' src={eightBall} />
              <h1 className='navTxt'>8 BALL</h1>
            </Link>
          </div>
          <div className='navItem '>
            <Link to={'RestaurantPage'} className='link d-flex'>
              <img className='navImg' src={food} />
              <h1 className='navTxt'>RESTAURANTS</h1>
            </Link>
          </div>
          <div className='navItem '>
            <Link to={'SayHelloPage'} className='link d-flex'>
              <img className='navImg' src={hello} />
              <h1 className='navTxt'>SAY HELLO</h1>
            </Link>
          </div>
        </div>

        

      </div>
      <Button className='sideBtn' onClick={handleShow}>
          <img src={mobile}></img>
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Body>
          <div className='navItem '>
            <Link to={'SumPage'} className='link d-flex'>
              <img className='navImg' src={plus} />
              <h1 className='navTxt'>THE SUM</h1>
            </Link>
          </div>
          <div className='navItem '>
            <Link to={'NameTimePage'} className='link d-flex'>
              <img className='navImg' src={person} />
              <h1 className='navTxt'>NAME & TIME</h1>
            </Link>
          </div>
          <div className='navItem '>
            <Link to={'GreaterLessPage'} className='link d-flex'>
              <img className='navImg' src={greater} />
              <h1 className='navTxt'>GREATER?</h1>
            </Link>
          </div>
          <div className='navItem '>
            <Link to={'MadLibPage'} className='link d-flex'>
              <img className='navImg' src={text} />
              <h1 className='navTxt'>MAD LIB</h1>
            </Link>
          </div>
          <div className='navItem '>
            <Link to={'OddEvenPage'} className='link d-flex'>
              <img className='navImg' src={odd} />
              <h1 className='navTxt'>ODD OR EVEN</h1>
            </Link>
          </div>
          <div className='navItem '>
            <Link to={'ReverseOnePage'} className='link d-flex'>
              <img className='navImg' src={reverseOne} />
              <h1 className='navTxt'>REVERSE IT I</h1>
            </Link>
          </div>
          <div className='navItem '>
            <Link to={'ReverseTwoPage'} className='link d-flex'>
              <img className='navImg' src={reverseTwo} />
              <h1 className='navTxt'>REVERSE IT II</h1>
            </Link>
          </div>
          <div className='navItem '>
            <Link to={'EightBallPage'} className='link d-flex'>
              <img className='navImg' src={eightBall} />
              <h1 className='navTxt'>8 BALL</h1>
            </Link>
          </div>
          <div className='navItem '>
            <Link to={'RestaurantPage'} className='link d-flex'>
              <img className='navImg' src={food} />
              <h1 className='navTxt'>RESTAURANTS</h1>
            </Link>
          </div>
          <div className='navItem '>
            <Link to={'SayHelloPage'} className='link d-flex'>
              <img className='navImg' src={hello} />
              <h1 className='navTxt'>SAY HELLO</h1>
            </Link>
          </div>
          </Offcanvas.Body>
        </Offcanvas>
    </div>

  )
}
