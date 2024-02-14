import DATA from '../../DATA'
import PhoneNumber from '../PhoneNumberPage/PhoneNumber'
import SubmitBtn from '../SubmitBtn/SubmitBtn'
import Timer from './Timer'
import './codePage.css'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
let OTP;

function CodePage() {
    useEffect(()=>{
        OTP = Math.floor(Math.random()*10000000)
        return () => { console.log(OTP)}
    } , [])
    
    function numberPage(){
        ReactDOM.createRoot(document.getElementById('root')).render(
            <React.StrictMode>
              <PhoneNumber/>
            </React.StrictMode>,
        )
    }

    return (
        <div className="container">
            <h1 className='title'>Enter Code</h1>
            <form className='form'>
                <p className="number">{DATA[0]}</p>
                <div className="codeInput">
                    <input type="text" className="otp" id='otp' placeholder="code" maxLength={7} />
                    <Timer/>
                </div>
                <SubmitBtn content={"Done"}/>
            </form>
            <p className="editPhoneNumber" onClick={numberPage}>Wrong Number?</p>
        </div>
    )
}

export default CodePage