export function coordsToArrayIndex(x, y, xSize, ySize) {
    if (x < 0 || y < 0 || x > xSize - 1 || y > ySize - 1) {
        return
    }
    return y * xSize + x
}