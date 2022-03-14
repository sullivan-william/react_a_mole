import { useEffect } from 'react'

function Mole(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img src='./mole.png' alt='mole' onClick={props.hitMole}></img>
        </div>
    )
}

export default Mole