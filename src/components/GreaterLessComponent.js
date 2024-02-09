import React from 'react';
import { useState } from 'react';
import { GreaterOrLessApi } from '../Services/DataServices.js';

export default function GreaterLessComponent() {
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
                const ans = await GreaterOrLessApi(numOne, numTwo);
                disappearDiv.classList.add("d-none");
                results.classList.remove("d-none");
                setResult(ans);
                setRunBtn('AGAIN');
            } else {
                input1.textContent = "";
                input2.textContent = "";
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
                    <div id='disappearDiv' className='d-flex justify-content-center align-items-center'>
                        <input id='input1' onChange={(e) => setNumOne(e.target.value)} className='inputNums' placeholder='123'></input>
                        <h1 className='plus'>?</h1>
                        <input id='input2' onChange={(e) => setNumTwo(e.target.value)} className='inputNums' placeholder='456'></input>
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
