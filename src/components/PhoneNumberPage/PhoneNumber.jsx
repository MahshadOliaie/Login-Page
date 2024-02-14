import './phoneNumber.css'

function PhoneNumber() {
    return (

        <div className="container">
            <h1 className='title'>Login</h1>
            <form className='form'>
                <div className="phoneNumber">
                    <select name="prefix" id="prefix">
                        <option value="iran">+98</option>
                    </select>
                    <input type="text" id='phoneNumber' placeholder='Phone Number' maxLength={10} />
                </div>
                <button className='submit'>Send Code</button>

                <p className='goToSignUp'>Create an account</p>
            </form>
        </div>

    )
}

export default PhoneNumber;