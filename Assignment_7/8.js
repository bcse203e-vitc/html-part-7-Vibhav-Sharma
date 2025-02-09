function bubbleSort(arr, order = "asc") {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if ((order === "asc" && arr[j] > arr[j + 1]) || (order === "desc" && arr[j] < arr[j + 1])) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
