// Created by Anna Heister, Codam Coding College, 08-11-2022

/*
* Function to check if there are duplicate numbers in an array -> if yes it returns true
*/
function checkDuplicates(input: number[]): boolean {
    let usedNums: number [] = [];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < usedNums.length; j++) {
            if (input[i] === usedNums[j]) {
                return true;
            }
        }
        usedNums.push(input[i]);
    }
    return false;
}

/*
* Function to create the 2D-array of all permutations of [2, 4, 8, 16, 32]
*/
function permute(input: number[]) {
    let arrNumbers: number[][] = []; 
    let newSet: number[] = [];
    for (let a = 0; a < 5; a++) {
        for (let b = 0; b < 5; b++) {
            for (let c = 0; c < 5; c++) {
                for (let d = 0; d < 5; d++) {
                    for (let e = 0; e < 5; e++) {
                        newSet = [];
                        newSet.push(input[a]);
                        newSet.push(input[b]);
                        newSet.push(input[c]);
                        newSet.push(input[d]);
                        newSet.push(input[e]);
                        if (checkDuplicates(newSet) === false) {
                            arrNumbers.push(newSet);
                        }
                    }
                }
            }
        }
    }
    return arrNumbers;
}

/*
* Function to create the 2D-array of all combinations of ['+', '-', '*', '/']
*/
function combine(input: string[]) {
    let arrOperations: string[][] = [];
    let newSet: string[] = [];
    for (let a = 0; a < 4; a++) {
        for (let b = 0; b < 4; b++) {
            for (let c = 0; c < 4; c++) {
                for (let d = 0; d < 4; d++) {
                    newSet = [];
                    newSet.push(input[a]);
                    newSet.push(input[b]);
                    newSet.push(input[c]);
                    newSet.push(input[d]);
                    arrOperations.push(newSet);
                }
            }
        }
    }
    return arrOperations;
}

function printTheMath(arrNum: number[], arrOp: string[]): void {
    let formula: string = arrNum[0].toString();
    let arr: number[] = arrNum.slice(1, 5);
    arr.forEach(function (num, i) {
        if (arrOp[i] === '+') {
            formula = formula + ' + ' + num.toString();  
        }
        else if (arrOp[i] === '-') {
            formula = formula + ' - ' + num.toString();
        }
        else if (arrOp[i] === '*') {
            formula = formula + ' * ' + num.toString();
        }
        else if (arrOp[i] === '/') {
            formula = formula + ' / ' + num.toString();
        }
    })
    formula = formula + ' = 11'
    console.log(formula); 
}

/*
* Function to calculate the result of an array of numbers with an array of operations
* The calculation rules ('*' and '/' go before '-' and '+') are implemented
* The final result is returned.
*/
function doTheMath(arrNum: number[], arrOp: string[]): number {

    let nums: number [] = [];
    let ops: string [] = [];
    arrNum.forEach(function (num) {
        nums.push(num);
    })
    arrOp.forEach(function (op) {
        ops.push(op);
    })
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === '*') {
            nums.splice(i, 2, (nums[i] * nums[i + 1]));
            ops.splice(i, 1);
            i--;
        }
        if (ops[i] === '/') {
            nums.splice(i, 2, (nums[i] / nums[i + 1]));
            ops.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === '+') {
            nums.splice(i, 2, (nums[i] + nums[i + 1]));
            ops.splice(i, 1);
            i--;
        }
        else if (ops[i] === '-') {
            nums.splice(i, 2, (nums[i] - nums[i + 1]));
            ops.splice(i, 1);
            i--;
        }
    }
    return nums[0];
}



/*
* Function that loops over all permutations and operations
* For every combination the result is calculated by calling the function doTheMath()
* When the result is 11, count (total of possibilities) is increased by 1
*/
function math_11():void {
    let arrNumbers: number[][] = permute([2, 4, 8, 16, 32]);
    let arrOperations: string[][] = combine(['+', '-', '*', '/']);
    console.log();
    let count: number = 0;
    for (var arrNum of arrNumbers) {
        for (var arrOp of arrOperations) {
            if (doTheMath(arrNum, arrOp) === 11) {
                printTheMath(arrNum, arrOp);
                count++;
            }
        }
    }
    console.log('\nAmount of possibilities: ', count, '\n');
 }

math_11();
