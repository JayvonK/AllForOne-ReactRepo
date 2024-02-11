import React from 'react'
import { SumApi } from '../Services/DataServices.js';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { sum } from './SideNavbarComponent.js';



export default function SumPageComponent() {


    let disappearDiv = document.getElementById("disappearDiv");
    let results = document.getElementById("results");
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");

    const [numOne, setNumOne] = useState('');
    const [numTwo, setNumTwo] = useState('');
    const [result, setResult] = useState('');
    const [runBtn, setRunBtn] = useState('RUN');

    const runBtnClick = async () => {
        if (numOne !== '' && numTwo !== '') {
            if (runBtn === "RUN") {
                setResult('');
                const ans = await SumApi(numOne, numTwo)
                disappearDiv.classList.add("d-none");
                results.classList.remove("d-none");
                setResult(ans);
                setRunBtn('AGAIN');
            } else {
                input1.value = "";
                input2.value = "";
                setNumOne('');
                setNumTwo('');
                disappearDiv.classList.remove("d-none");
                results.classList.add("d-none");
                setRunBtn('RUN');
            }
        } else {
            alert("Please Fill in the input fields");
        }
    }
    return (
        <div className='homeBg'>
            <Row className='g-0'>
                <Col xs={1}></Col>
                <Col xs={10}>
                    <div className='boxDiv'>
                        <div className='apiBox d-flex justify-content-center align-items-center'>
                            <Row id='disappearDiv' className='sumRow'>

                            <Col className='d-flex justify-content-center'>
                                <input id='input1' onChange={(e) => setNumOne(e.target.value)} className='inputNums' placeholder='123'></input>
                                </Col>
                             <Col lg={3} xs={12} className='d-flex justify-content-center align-items-center'>
                             <h1 className='plus'>+</h1>
                             </Col>
                             <Col className='d-flex justify-content-center'>
                                <input id='input2' onChange={(e) => setNumTwo(e.target.value)} className='inputNums' placeholder='456'></input></Col>
                            </Row>
                            <h1 id='results' className='sumResult d-none'>{result}</h1>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <button id='runBtn' onClick={() => runBtnClick()} className='runBtn'>{runBtn}</button>
                    </div>
                    <p className='darkBlue apiRules'>*Instructions: Input two numbers above to get the sum</p>
                </Col>
                <Col xs={1}></Col>
            </Row>


        </div>
    )
}
