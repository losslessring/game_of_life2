import { getNeighbours } from '../utils/getNeighbours.js'
import { calculateNextGenerationCell } from "./calculateNextGenerationCell.js"

export function calculateNextGenerationField(grid, cols, rows){
    return grid.map((cell) => {
        const neighbours = getNeighbours(cell.x, cell.y, cols, rows, grid)
        const color = calculateNextGenerationCell(cell, neighbours)
        return {...cell, color}
        })
}