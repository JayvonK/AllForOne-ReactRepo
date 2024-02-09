import React from 'react'

let runBtn = document.getElementById("runBtn");

const runBtnClick = () => {
    if(runBtn.textContent === "RUN"){
        runBtn.textContent = "AGAIN"
    } else {
        runBtn.textContent = "RUN";
    }
}

export default function SumPageComponent() {
    return (
        <div className='homeBg'>
            <div className='boxDiv'>
                <div className='apiBox d-flex justify-content-center align-items-center'>
                    <input className='inputNums' placeholder='123'></input>
                    <h1 className='plus'>+</h1>
                    <input className='inputNums' placeholder='456'></input>
                </div>
            </div>

            <div className='d-flex justify-content-center'>
                <button id='runBtn' onClick={() => runBtnClick()} className='runBtn'>RUN</button>
            </div>
            <p className='darkBlue apiRules'>*Instructions: Input two numbers above to get the sum</p>
        </div>
    )
}
