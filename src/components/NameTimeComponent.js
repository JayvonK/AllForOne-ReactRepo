import React from 'react';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NameTimeApi } from '../Services/DataServices.js';

export default function NameTimeComponent() {

    let disappearDiv = document.getElementById("disappearDiv");
    let results = document.getElementById("results");

    const [numOne, setNumOne] = useState('');
    const [numTwo, setNumTwo] = useState('');
    const [result, setResult] = useState('');
    const [runBtn, setRunBtn] = useState('RUN');

    const runBtnClick = async () => {
        if (numOne !== '' && numTwo !== '') {
            if (runBtn === "RUN") {
                setResult('');
                const ans = await NameTimeApi(numOne, numTwo);
                disappearDiv.classList.add("d-none");
                results.classList.remove("d-none");
                setResult(ans);
                setRunBtn('AGAIN');
            } else {
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
            <div className='boxDiv'>
                <div className='apiBox d-flex justify-content-center align-items-center'>
                    <div id='disappearDiv' className='w100'>
                        <Row>
                            <Col lg={3}>
                                <p className='nameTxt'>Name:</p>
                            </Col>
                            <Col lg={9} className='d-flex align-items-center'>
                                <input onChange={(e) => setNumOne(e.target.value)} className='nameInput darkBlue jost'></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={3}>
                                <p className='nameTxt'>Time:</p>
                            </Col>
                            <Col lg={9} className='d-flex align-items-center'>
                                <input onChange={(e) => setNumTwo(e.target.value)} className='nameInput darkBlue jost'></input>
                            </Col>
                        </Row>
                    </div>

                    <h1 id='results' className='greaterLessResult d-none'>{result}</h1>
                </div>
            </div>

            <div className='d-flex justify-content-center'>
                <button id='runBtn' onClick={() => runBtnClick()} className='runBtn'>{runBtn}</button>
            </div>
            <p className='darkBlue apiRules'>*Instructions: Input two numbers above to get the sum</p>
        </div>
    )
}
