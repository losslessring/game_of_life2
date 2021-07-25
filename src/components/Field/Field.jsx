import React, { useState, useEffect } from "react"
import Cell from '../Cell/Cell.jsx'

import { generateField } from '../../utils/generateField.js'
import { getRandomItem } from '../../utils/getRandomItem.js'
import { coordsToArrayIndex } from '../../utils/coordsToArrayIndex.js'
import { getNeighbours } from '../../utils/getNeighbours.js'

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
    useEffect(() => grid.map(cell => {
                                //console.log(coordsToArrayIndex(cell.x, cell.y, cols))
                                console.log(getNeighbours(cell.x, cell.y, cols, rows, "index", grid))
                                return console.log(cell)
                            
                            }))
    return (
    <div style={styleObj}>
        {grid.map((component) => (
                <Cell key={component.index} index={component.index} color={component.color} />
        ))}
    </div>
)}

export default Field