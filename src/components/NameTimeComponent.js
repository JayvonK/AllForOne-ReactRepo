import React from 'react';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NameTimeApi } from '../Services/DataServices.js';
export default function NameTimeComponent() {

    let disappearDiv = document.getElementById("disappearDiv");
    let results = document.getElementById("results");
    let nameInput = document.getElementById("nameInput");
    let timeInput = document.getElementById("timeInput");

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
                nameInput.value = "";
                timeInput.value = "";
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
                            <div id='disappearDiv' className='w100 nameDiv'>
                                <Row className='nameRow'>
                                    <Col lg={3} xs={12}>
                                        <p className='nameTxt'>Name:</p>
                                    </Col>
                                    <Col lg={9} xs={12} className='d-flex align-items-center'>
                                        <div className='nameInputDiv w100 '>
                                            <input id='nameInput' onChange={(e) => setNumOne(e.target.value)} className='nameInput darkBlue jost'></input>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='nameRow'>
                                    <Col lg={3} xs={12}>
                                        <p className='nameTxt'>Time:</p>
                                    </Col>
                                    <Col lg={9} xs={12} className='d-flex align-items-center'>
                                        <div className='nameInputDiv w100'>
                                            <input id='timeInput' onChange={(e) => setNumTwo(e.target.value)} className='nameInput darkBlue jost'></input>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <h1 id='results' className='nameResult d-none'>{result}</h1>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button id='runBtn' onClick={() => runBtnClick()} className='runBtn'>{runBtn}</button>
                    </div>
                    <p className='darkBlue apiRules'>*Instructions: Input your name and a time above to display a sentence</p>
                </Col>
                <Col xs={1}></Col>
            </Row>

        </div>
    )
}
