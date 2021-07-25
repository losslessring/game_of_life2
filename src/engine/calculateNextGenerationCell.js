export function calculateNextGenerationCell(cell, neighbours) {
    //console.log(neighbours)
    const neighboursCount = neighbours.filter(neighbour => neighbour !== undefined)
                          .filter(neighbour => neighbour.color === "Green")
                          .length
    if ( cell.color === "Green" && neighboursCount < 2 ) {
        return "Empty" 
    }  else if (cell.color === "Green" && neighboursCount > 3 ){
        return "Empty"
    }  else if ( cell.color === "Empty" && neighboursCount === 3 ) {
        return "Green"
    } else if (cell.color === "Green") {
        return "Green"
    } else return "Empty"
}