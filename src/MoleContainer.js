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
            <h2 onClick={() => displayMole ? hitMole() : null}>Mole Container</h2>
            {displayMole ? <Mole /> : <EmptySlot />}
        </div>
    )
}

export default MoleContainer