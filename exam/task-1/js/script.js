let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function findPairsWithSum(arr, targetSum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum) {
                console.log(`Values ${arr[i]} at index ${i} and  ${arr[j]} at index {j} sum up to 8`);
            }
        }
    }
}

findPairsWithSum(arry, 8);
