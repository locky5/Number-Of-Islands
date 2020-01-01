var numIslands = function(grid) {
    let count = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (checkNeighbors(grid, i, j)) {
                count++
            }
        }
    }

    function checkNeighbors(grid, i, j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
            return false
        }

        grid[i][j] = '0'

        checkNeighbors(grid, i + 1, j)
        checkNeighbors(grid, i - 1, j)
        checkNeighbors(grid, i, j + 1)
        checkNeighbors(grid, i, j - 1)

        return true
    }

    return count
};
