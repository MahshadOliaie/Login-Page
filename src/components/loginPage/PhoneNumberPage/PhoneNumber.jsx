import { useState } from 'react';
import PhoneNumberInput from '../PhoneNumberInput/PhoneNumberInput';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import './phoneNumber.css'
import DATA from '../../../DATA';
import CodePage from '../../CodePage/CodePage';
import React from 'react'
import ReactDOM from 'react-dom/client'

function PhoneNumber() {
    const [inputValue, setInputValue] = useState("")
    const [submitState, setSubmitState] = useState("notActive")

    function checkNumber() {
        let value = event.target.value
        if (((value.match(/^\d{1,}$/)) && value.startsWith("9")) || value == "") {
            setInputValue(value)
        }
        if (value.length == 10) {
            setSubmitState("active")
        }
        else
            setSubmitState("notActive")
    }

    function submit() {
        event.preventDefault()
        DATA.push(`+98${inputValue}`)
        ReactDOM.createRoot(document.getElementById('root')).render(
            <CodePage />
        )
    }

    return (

        <div className="container">
            <h1 className='title'>Login</h1>
            <form className='form'>
                <PhoneNumberInput value={inputValue} onChange={checkNumber} />
                <SubmitBtn content={"Send Code"} onClick={submit} state={submitState} />
                <p className='goToSignUp'>Create an account</p>
            </form>
        </div>

    )
}

export default PhoneNumber;