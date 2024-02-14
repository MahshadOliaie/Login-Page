import './submitBtn.css'

function SubmitBtn({content , state , onClick}){
    return(
        <button onSubmit={onClick} className='submit' id={state} onClick={onClick}>{content}</button>
    )
}

export default SubmitBtn