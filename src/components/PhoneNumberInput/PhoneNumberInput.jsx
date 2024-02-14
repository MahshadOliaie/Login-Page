import { useRef, useState } from 'react';
import './phoneNumberInput.css'

function PhoneNumberInput() {
    const [inputValue, setInputValue] = useState("")

    function checkNumber() {
        let value = event.target.value
        if ((value.match(/^\d{1,}$/)) || value == "") {
            setInputValue(value)
        }

    }

    return (
        <div className="phoneNumber">
            <select name="prefix" id="prefix">
                <option value="iran">+98</option>
            </select>
            <input type="text" id='phoneNumber' value={inputValue} placeholder='Phone Number' maxLength={10} onChange={checkNumber} />
        </div>
    )
}

export default PhoneNumberInput;