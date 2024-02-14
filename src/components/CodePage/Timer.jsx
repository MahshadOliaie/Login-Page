import { useEffect, useState } from "react"


function Timer() {
    const [time, setTime] = useState(120)

    useEffect(() => {
        let timer
        if (time > 0) {
            timer = setTimeout(() => {
                setTime((prev) => (prev - 1))
            }, 1000)
        }

        return () => { clearTimeout(timer) }
    }, [time])

    return (
        <p className="timer">0{(Math.floor(time / 60))}:{(Math.ceil(time % 60)<10)? "0":""}{Math.ceil(time % 60)}</p>
    )
}

export default Timer;