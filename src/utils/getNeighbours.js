import { coordsToArrayIndex } from './coordsToArrayIndex.js'

export function getNeighbours(x, y, xSize, ySize, prop, arr) {
    
    const neighbours = [
        { x_coord: x - 1,    y_coord: y - 1 },
        { x_coord: x    ,    y_coord: y - 1 },
        { x_coord: x + 1,    y_coord: y - 1 },
        { x_coord: x - 1,    y_coord: y     },
        
        { x_coord: x + 1,    y_coord: y     },
        { x_coord: x - 1,    y_coord: y + 1 },
        { x_coord: x    ,    y_coord: y + 1 },
        { x_coord: x + 1,    y_coord: y + 1 },
    ]

    
    
    return neighbours.map( neighbour => {
                        if (neighbour.x_coord < 0 || neighbour.y_coord < 0){
                            return
                        }
                        const index = coordsToArrayIndex(neighbour.x_coord, neighbour.y_coord, xSize, ySize)
                        //console.log(arr[index])
                        return arr[index]
    })
    
}