import React from 'react';
import { useState } from 'react';
import { Reverse2Api } from '../Services/DataServices';

export default function ReverseIt2Component() {
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
                const ans = await Reverse2Api(numOne);
                disappearDiv.classList.add("d-none");
                results.classList.remove("d-none");
                setResult(ans);
                setRunBtn('AGAIN');
            } else {
                input1.value = "";
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
                        <input id='input1' onChange={(e) => setNumOne(e.target.value)} className='inputOdd' placeholder='123'></input>
                    </div>

                    <h1 id='results' className='sumResult d-none'>{result}</h1>
                </div>
            </div>

            <div className='d-flex justify-content-center'>
                <button id='runBtn' onClick={() => runBtnClick()} className='runBtn'>{runBtn}</button>
            </div>
            <p className='darkBlue apiRules'>*Instructions: Input two numbers above to get the sum</p>
        </div>
    )
}
