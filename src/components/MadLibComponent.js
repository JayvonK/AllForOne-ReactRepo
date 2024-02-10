import React from 'react';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MadLibApi } from '../Services/DataServices.js';

export default function MadLibComponent() {
    let disappearDiv = document.getElementById("disappearDiv");
    let results = document.getElementById("results");

    const [inpOne, setInpOne] = useState('');
    const [inpTwo, setInpTwo] = useState('');
    const [inpThree, setInpThree] = useState('');
    const [inpFour, setInpFour] = useState('');
    const [inpFive, setInpFive] = useState('');
    const [inpSix, setInpSix] = useState('');
    const [inpSeven, setInpSeven] = useState('');
    const [inpEight, setInpEight] = useState('');
    const [inpNine, setInpNine] = useState('');
    const [inpTen, setInpTen] = useState('');
    const [result, setResult] = useState('');
    const [runBtn, setRunBtn] = useState('RUN');

    const runBtnClick = async () => {
        if (inpOne !== '' && inpTwo !== '' && inpThree !== '' && inpFour !== '' && inpFive !== '' && inpSix !== '' && inpSeven !== '' && inpEight !== '' && inpNine !== '' && inpTen !== '') {
            if (runBtn === "RUN") {
                setResult('');
                const ans = await MadLibApi(inpOne, inpTwo, inpThree, inpFour, inpFive, inpSix, inpSeven, inpEight, inpNine, inpTen);
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
            <Row className='g-0'>
                <Col lg={1}></Col>
                <Col lg={10}>
                    <div className='boxDiv'>
                        <div className='madLibBox d-flex justify-content-center align-items-center'>
                            <div id='disappearDiv' className='w100 h100'>
                                <Row id='disappearDiv' className='madLibRow h100'>
                                    <Col>
                                        <Row className='g-0'>
                                            <input onChange={(e) => setInpOne(e.target.value)} className='madLibInput jost darkBlue' placeholder='Celebrity Name'></input>
                                        </Row>
                                        <Row className='g-0'>
                                            <input onChange={(e) => setInpTwo(e.target.value)} className='madLibInput jost darkBlue' placeholder='Animal'></input>
                                        </Row>
                                        <Row className='g-0'>
                                            <input onChange={(e) => setInpFive(e.target.value)} className='madLibInput jost darkBlue' placeholder='Number > 1'></input>
                                        </Row>
                                        <Row className='g-0'>
                                            <input onChange={(e) => setInpSix(e.target.value)} className='madLibInput jost darkBlue' placeholder='Time'></input>
                                        </Row>
                                        <Row className='g-0'>
                                            <input onChange={(e) => setInpSeven(e.target.value)} className='madLibInput jost darkBlue' placeholder='Height'></input>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row className='g-0'>
                                            <input onChange={(e) => setInpEight(e.target.value)} className='madLibInput jost darkBlue' placeholder='Adjective'></input>
                                        </Row>
                                        <Row className='g-0'>
                                            <input onChange={(e) => setInpNine(e.target.value)} className='madLibInput jost darkBlue' placeholder='Name'></input>
                                        </Row>
                                        <Row className='g-0'>
                                            <input onChange={(e) => setInpTen(e.target.value)} className='madLibInput jost darkBlue' placeholder='Condiment'></input>
                                        </Row>
                                        <Row className='g-0'>
                                            <input onChange={(e) => setInpThree(e.target.value)} className='madLibInput jost darkBlue' placeholder='Body Part'></input>
                                        </Row>
                                        <Row className='g-0'>
                                            <input onChange={(e) => setInpFour(e.target.value)} className='madLibInput jost darkBlue' placeholder='Noun Ending With S'></input>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                            <h1 id='results' className='madLibResult d-none'>{result}</h1>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <button id='runBtn' onClick={() => runBtnClick()} className='runBtn'>{runBtn}</button>
                    </div>
                    <p className='darkBlue apiRules'>*Instructions: Input two numbers above to get the sum</p>
                </Col>
                <Col lg={1}></Col>
            </Row>

        </div>
    )
}
