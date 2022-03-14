import Mole from "./Mole"
import EmptySlot from "./EmptySlot"
import { useState } from 'react'

function MoleContainer(props) {
    let [displayMole, setDisplayMole] = useState(false)

    const hitMole = () => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

    return (
        <div>
            {displayMole ? <Mole displayMole={displayMole} setDisplayMole={setDisplayMole} hitMole={hitMole}/> : <EmptySlot displayMole={displayMole} setDisplayMole={setDisplayMole}/>}
        </div>
    )
}

export default MoleContainer