import './phoneNumberInput.css'

function PhoneNumberInput() {
    return (
        <div className="phoneNumber">
            <select name="prefix" id="prefix">
                <option value="iran">+98</option>
            </select>
            <input type="text" id='phoneNumber' placeholder='Phone Number' maxLength={10} />
        </div>
    )
}

export default PhoneNumberInput;