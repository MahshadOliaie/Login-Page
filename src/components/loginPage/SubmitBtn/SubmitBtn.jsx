import './submitBtn.css'

function SubmitBtn({content , state , onClick}){
    return(
        <p className='submit' id={state} onClick={onClick}>{content}</p>
    )
}

export default SubmitBtn