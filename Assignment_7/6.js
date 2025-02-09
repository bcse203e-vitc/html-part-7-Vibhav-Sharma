function findDuplicates(arr) {
    let seen = new Set(), duplicates = new Set();
    arr.forEach(num => seen.has(num) ? duplicates.add(num) : seen.add(num));
    return [...duplicates];
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 4])); // [2, 4]
