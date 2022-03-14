import { useEffect } from 'react'

function EmptySlot(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img src="./molehill.png" alt='mole hill'></img>
        </div>
    )
}

export default EmptySlot