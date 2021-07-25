export function generateField(rows, cols, extraProp, extraData, callback) {
    let field = []
    for (let i = 0, counter = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        
        field.push({ x: j,
                     y: i,
                     [extraProp]: callback(extraData),
                     index: counter  
                    })
        counter++
      }
    }
    return field
}