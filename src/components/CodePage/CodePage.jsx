import './codePage.css'

function CodePage() {
    return (
        <div className="container">
            <h1 className='title'>Enter Code</h1>
            <form className='form'>
                <div className="codeInput">
                    <input type="text" className="otp" id='otp' placeholder="code" maxLength={7} />
                    <p className="timer">02:00</p>
                </div>
                <button className='submit'>Done</button>
            </form>
            <p className="editPhoneNumber">Wrong Number?</p>
        </div>
    )
}

export default CodePage