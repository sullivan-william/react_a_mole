import Mole from "./Mole"
import EmptySlot from "./EmptySlot"
import { useState } from 'react'
import './App.css'

function MoleContainer(props) {
    let [displayMole, setDisplayMole] = useState(false)

    const hitMole = () => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

    return (
        <div className="mole-container">
            {displayMole ? <Mole displayMole={displayMole} setDisplayMole={setDisplayMole} hitMole={hitMole}/> : <EmptySlot displayMole={displayMole} setDisplayMole={setDisplayMole}/>}
        </div>
    )
}

export default MoleContainer