import React, { useState, useEffect } from "react"
import { generateField} from '../../utils/generateField.js'
import { getRandomItem} from '../../utils/getRandomItem.js'
import Cell from '../Cell/Cell.jsx'

const Field = () => {
    const colors = ["Empty", "Green"]
    const [rows, setRows] = useState(5)
    const [cols, setCols] = useState(5)
    const [grid, setGrid] = useState(generateField(rows, cols, "color", colors, getRandomItem))
    const [styleObj, setStyle] = useState({
                                            display: 'grid',
                                            gridTemplateRows: `repeat(${rows}, 100px)`,
                                            gridTemplateColumns: `repeat(${cols}, 100px)`,
                                            justifyItems: 'center',
                                            border: '5px solid lightGrey',
                                            color: '#ffffff',
                                            backgroundColor: 'lightGrey',
                                            gap: '2px'
                                        })
    useEffect(() => console.log(grid))
    return (
    <div style={styleObj}>
        {grid.map((component) => (
                <Cell key={component.index} index={component.index} color={component.color} />
        ))}
    </div>
)}

export default Field