import PhoneNumberInput from '../PhoneNumberInput/PhoneNumberInput';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import './phoneNumber.css'

function PhoneNumber() {
    return (

        <div className="container">
            <h1 className='title'>Login</h1>
            <form className='form'>
                <PhoneNumberInput />
                <SubmitBtn content={"Send Code"}/>
                <p className='goToSignUp'>Create an account</p>
            </form>
        </div>

    )
}

export default PhoneNumber;