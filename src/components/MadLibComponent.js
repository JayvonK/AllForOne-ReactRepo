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
        let inp1 = document.getElementById("inp1");
        let inp2 = document.getElementById("inp2");
        let inp3 = document.getElementById("inp3");
        let inp4 = document.getElementById("inp4");
        let inp5 = document.getElementById("inp5");
        let inp6 = document.getElementById("inp6");
        let inp7 = document.getElementById("inp7");
        let inp8 = document.getElementById("inp8");
        let inp9 = document.getElementById("inp9");
        let inp10 = document.getElementById("inp10");

        if (inpOne !== '' && inpTwo !== '' && inpThree !== '' && inpFour !== '' && inpFive !== '' && inpSix !== '' && inpSeven !== '' && inpEight !== '' && inpNine !== '' && inpTen !== '') {
            if (runBtn === "RUN") {
                setResult('');
                const ans = await MadLibApi(inpOne, inpTwo, inpThree, inpFour, inpFive, inpSix, inpSeven, inpEight, inpNine, inpTen);
                disappearDiv.classList.add("d-none");
                results.classList.remove("d-none");
                setResult(ans);
                setRunBtn('AGAIN');
            } else {
                inp1.value = "";
                inp2.value = "";
                inp3.value = "";
                inp4.value = "";
                inp5.value = "";
                inp6.value = "";
                inp7.value = "";
                inp8.value = "";
                inp9.value = "";
                inp10.value = "";
                setInpOne('');
                setInpTwo('');
                setInpThree('');
                setInpFour('');
                setInpFive('');
                setInpSix('');
                setInpSeven('');
                setInpEight('');
                setInpNine('');
                setInpTen('');
                disappearDiv.classList.remove("d-none");
                results.classList.add("d-none");
                setRunBtn('RUN');
            }
        } else {
            alert("Please Fill in the input fields");
        }
    }
    return (
        <div className='madLibBg'>
            <Row className='g-0'>
                <Col xs={1}></Col>
                <Col xs={10}>
                    <div className='boxDiv'>
                        <div className='madLibBox d-flex justify-content-center align-items-center'>
                            <Row id='disappearDiv' className='madLibRow h100 w100'>
                                <Col lg={6} xs={12}>
                                    <div className='d-flex justify-content-center'>
                                        <input id='inp1' onChange={(e) => setInpOne(e.target.value)} className='madLibInput jost darkBlue' placeholder='Celebrity Name'></input>
                                    </div>

                                    <div className='d-flex justify-content-center'>
                                        <input id='inp2' onChange={(e) => setInpTwo(e.target.value)} className='madLibInput jost darkBlue' placeholder='Animal'></input>
                                    </div>

                                    <div className='d-flex justify-content-center'>
                                        <input id='inp3' onChange={(e) => setInpFour(e.target.value)} className='madLibInput jost darkBlue' placeholder='Noun Ending With S'></input>
                                    </div>

                                    <div className='d-flex justify-content-center'>
                                        <input id='inp4' onChange={(e) => setInpFive(e.target.value)} className='madLibInput jost darkBlue' placeholder='Number > 1'></input>
                                    </div>

                                    <div className='d-flex justify-content-center'>
                                        <input id='inp5' onChange={(e) => setInpSix(e.target.value)} className='madLibInput jost darkBlue' placeholder='Time'></input>
                                    </div>
                                </Col>
                                <Col lg={6} xs={12}>
                                    <div className='d-flex justify-content-center'>
                                        <input id='inp6' onChange={(e) => setInpSeven(e.target.value)} className='madLibInput jost darkBlue' placeholder='Height'></input>
                                    </div>

                                    <div className='d-flex justify-content-center'>
                                        <input id='inp7' onChange={(e) => setInpEight(e.target.value)} className='madLibInput jost darkBlue' placeholder='Adjective'></input>
                                    </div>

                                    <div className='d-flex justify-content-center'>
                                        <input id='inp8' onChange={(e) => setInpNine(e.target.value)} className='madLibInput jost darkBlue' placeholder='Name'></input>
                                    </div>

                                    <div className='d-flex justify-content-center'>
                                        <input id='inp9' onChange={(e) => setInpTen(e.target.value)} className='madLibInput jost darkBlue' placeholder='Condiment'></input>
                                    </div>

                                    <div className='d-flex justify-content-center'>
                                        <input id='inp10' onChange={(e) => setInpThree(e.target.value)} className='madLibInput jost darkBlue' placeholder='Body Part'></input>
                                    </div>
                                </Col>
                            </Row>
                            <h1 id='results' className='madLibResult d-none'>{result}</h1>
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
