
import './phoneNumberInput.css'

function PhoneNumberInput({value , onChange}) {
    return (
        <div className="phoneNumber">
            <select name="prefix" id="prefix">
                <option value="iran">+98</option>
            </select>
            <input type="text" id='phoneNumber' value={value} placeholder='Phone Number' maxLength={10} onChange={onChange} />
        </div>
    )
}

export default PhoneNumberInput;