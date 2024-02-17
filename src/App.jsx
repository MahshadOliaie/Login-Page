import { useState } from "react";
import PhoneNumberContext from "./assets/context/PhoneNumberContext";
import PhoneNumber from "./components/loginPage/PhoneNumberPage/PhoneNumber";


function App() {
    const [number , setNumber] = useState("")

    function numberSetter(phone){
        setNumber(phone)
    }

    return (
        <>
            <PhoneNumberContext.Provider value={{
                number,
                numberSetter: (params)=> {
                    numberSetter(params)
                }
            }}>
                <PhoneNumber />
            </PhoneNumberContext.Provider>
        </>
    )
}

export default App;