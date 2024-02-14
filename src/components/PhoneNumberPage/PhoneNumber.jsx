import { useState } from 'react';
import PhoneNumberInput from '../PhoneNumberInput/PhoneNumberInput';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import './phoneNumber.css'
import DATA from '../../DATA';

function PhoneNumber() {
    const [inputValue, setInputValue] = useState("")
    const [submitState, setSubmitState] = useState("notActive")

    function checkNumber() {
        let value = event.target.value
        if ((value.match(/^\d{1,}$/)) || value == "") {
            setInputValue(value)
        }
        if (value.length == 10) {
            setSubmitState("active")
        }
        else
            setSubmitState("notActive")
    }

    function sub() {
        DATA.push(inputValue)
        console.log(DATA)
    }

    return (

        <div className="container">
            <h1 className='title'>Login</h1>
            <form className='form'>
                <PhoneNumberInput value={inputValue} onChange={checkNumber} />
                <SubmitBtn content={"Send Code"} onClick={sub} state={submitState} />
                <p className='goToSignUp'>Create an account</p>
            </form>
        </div>

    )
}

export default PhoneNumber;