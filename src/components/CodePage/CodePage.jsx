import DATA from '../../DATA'
import PhoneNumber from '../loginPage/PhoneNumberPage/PhoneNumber'
import SubmitBtn from '../loginPage/SubmitBtn/SubmitBtn'
import CodeInput from './CodeInput'
import Timer from './Timer'
import './codePage.css'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

function CodePage() {
    const [OTP, setOTP] = useState("")
    const [expire, setExpire] = useState(false)
    const [inputCode, setInputCode] = useState("")
    const [warning, setWarning] = useState("")

    useEffect(() => {
        let otp = Math.floor((Math.random() * 1000000) + 10000)
        setOTP(otp)
        console.log(otp)
        return () => { }
    }, [])



    function numberPage() {
        ReactDOM.createRoot(document.getElementById('root')).render(
            <React.StrictMode>
                <PhoneNumber/>
            </React.StrictMode>,
        )
    }

    function remount() {
        ReactDOM.createRoot(document.getElementById('root')).render(
            <CodePage />
        )
    }

    function updateInputCode(inputCode) {
        setInputCode(inputCode)
        setWarning("")
    }

    function checkCode() {
        event.preventDefault()
        if (inputCode == OTP) {
            setWarning("success")
        }

        if (inputCode == "")
            setWarning("please enter the code!!")


        if (inputCode.length > 0 && inputCode != OTP)
            setWarning("wrong code!!!")
    }

    function expireFn() {
        setExpire(true)
    }

    return (
        <div className={(warning == "success")? "container success" : "container"}>
            {(warning == "success") ? <p>loged in</p> :
                <>
                    <h1 className='title'>Enter Code</h1>
                    <form className='form'>
                        <p className="number">{DATA[0]}</p>
                        <div className="codeInput">
                            <CodeInput getCode={(inputCode) => updateInputCode(inputCode)} />
                            <Timer expire={expireFn} />
                            <p className="warning">{warning}</p>
                        </div>
                        {(expire) ? <SubmitBtn content={"Resend Code"} onClick={remount} /> : <SubmitBtn content={"Done"} onClick={checkCode} />}
                    </form>
                    <p className="editPhoneNumber" onClick={numberPage}>Wrong Number?</p>
                </>}
        </div>
    )
}

export default CodePage