import React from 'react';
import { useState } from 'react';
import { Reverse1Api } from '../Services/DataServices';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ReverseIt1Component() {
    let disappearDiv = document.getElementById("disappearDiv");
    let results = document.getElementById("results");
    let input1 = document.getElementById("input1");

    const [numOne, setNumOne] = useState('');
    const [result, setResult] = useState('');
    const [runBtn, setRunBtn] = useState('RUN');

    const runBtnClick = async () => {
        if (numOne !== '') {
            if (runBtn === "RUN") {
                setResult('');
                const ans = await Reverse1Api(numOne);
                disappearDiv.classList.add("d-none");
                results.classList.remove("d-none");
                setResult(ans);
                setRunBtn('AGAIN');
            } else {
                input1.value = "";
                setNumOne('');
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
                            <div id='disappearDiv' className='d-flex justify-content-center align-items-center'>
                                <input id='input1' onChange={(e) => setNumOne(e.target.value)} className='inputOdd' placeholder='ABC123'></input>
                            </div>

                            <h1 id='results' className='sumResult d-none'>{result}</h1>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <button id='runBtn' onClick={() => runBtnClick()} className='runBtn'>{runBtn}</button>
                    </div>
                    <p className='darkBlue apiRules'>*Instructions: Input an alphanumeric above to reverse it</p>
                </Col>
                <Col xs={1}></Col>
            </Row>

        </div>
    )
}
