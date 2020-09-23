/* Write your code below */
class Matrix {
    constructor(rowDimensions, colDimensions){
        this.generateMatrix = this.generateMatrix(rowDimensions, colDimensions),
        this.matrix
    }

    generateMatrix(rowDimensions, colDimensions){
        let number = 1
        let matrix = []

        for(let r=0; r<rowDimensions; r++){
            let row = []
            for(let c=0; c<colDimensions; c++){
                row.push(number++)
            }
            matrix.push(row)
        }

        this.matrix = matrix
    }

    print = function(){
        console.log(this.matrix)
    }

    printColumn = function(colNum){
        for (let i=0; i<this.matrix.length; i++){
            console.log(this.matrix[i][colNum])
        }
    }

    printRow = function(rowNum) {
        for (let i=0; i<this.matrix[rowNum].length; i++){
            console.log(this.matrix[rowNum][i])
        }
    }

    alter = function(row, column, value){
        this.matrix[row][column] = value
    }

    get = function(row, column){
        return this.matrix[row][column]
    }
}

//You can paste the code from the lesson below to test your solution
let m = new Matrix(3, 4)
m.print()
m.alter(0, 0, m.get(1, 1))
m.print()
m.printColumn(0) //prints 6, 5, 9 (separate lines)
m.printRow(0) //prints 6, 2, 3, 4 (separate lines)

/* Do not remove the exports below */
module.exports = Matrix