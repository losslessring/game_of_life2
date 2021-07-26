import React, { useState, useEffect } from "react"
import Cell from '../Cell/Cell.jsx'

import { generateField } from '../../utils/generateField.js'
import { getRandomItem } from '../../utils/getRandomItem.js'
import { coordsToArrayIndex } from '../../utils/coordsToArrayIndex.js'
import { getNeighbours } from '../../utils/getNeighbours.js'
import { useInterval } from '../../hooks/useInterval.js'
import { calculateNextGenerationField } from "../../engine/calculateNextGenerationField.js"

const Field = () => {
    const colors = ["Empty", "Green"]
    const [rows, setRows] = useState(() => 50)
    const [cols, setCols] = useState(() => 50)
    const [grid, setGrid] = useState(() => generateField(rows, cols, "color", colors, getRandomItem))
    
    const [count, setCount] = useState(() => 0)
    const [delay, setDelay] = useState(() => 100)
    const [isPlaying, setPlaying] = useState(() => false)
    const [styleObj, setStyle] = useState(() => ({
                                            display: 'grid',
                                            gridTemplateRows: `repeat(${rows}, 10px)`,
                                            gridTemplateColumns: `repeat(${cols}, 10px)`,
                                            justifyItems: 'center',
                                            border: '5px solid lightGrey',
                                            color: '#ffffff',
                                            backgroundColor: 'lightGrey',
                                            gap: '2px'
                                        }))

    useInterval(
            () => {
                    // Your custom logic here
                    setCount(prevCount => prevCount + 1)
                    //setGrid(generateField(rows, cols, "color", colors, getRandomItem))
                    setGrid(prevGridState => calculateNextGenerationField(prevGridState, cols, rows))
            },
            // Delay in milliseconds or null to stop it
            isPlaying ? delay : null,
    )

    const handleChange = (event) => {
        setDelay(Number(event.target.value))
      }
    
    const restartGame = () => {
        setCount(prevCount => 0)
        setGrid((prevGridState) => generateField(rows, cols, "color", colors, getRandomItem))
    }                            
                     
    return (
        <div>
            <div style={styleObj}>
                {grid.map((component) => (
                        <Cell key={component.index} index={component.index} color={component.color} />
                ))}
            </div>
            <h1 className="Counter">Steps {count}</h1>
            
            <button className="Button" onClick={() => setPlaying(!isPlaying)}>
                {isPlaying ? 'pause' : 'play'}
            </button>
            
            <button className="Button" onClick={restartGame}>
                    restart
            </button>
            
            <p>
                <label>Delay: </label>
                <input type="number" onChange={handleChange} value={delay} />
            </p>
        </div>
)}

export default Field