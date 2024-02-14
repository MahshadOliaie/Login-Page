import { useRef } from "react";


function CodeInput({getCode}) {
    let Ref = useRef(null)

    function setCode() {
        if (Ref.current.value.length == 6) {
            getCode(Ref.current.value)
        }
    }

    return (
        <input type="text" className="otp" id='otp' placeholder="code" maxLength={6} ref={Ref} onChange={setCode}/>
    )
}

export default CodeInput;