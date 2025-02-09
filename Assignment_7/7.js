function secondLargest(arr) {
    let sorted = [...new Set(arr)].sort((a, b) => b - a);
    return sorted[1] || null;
}

console.log(secondLargest([10, 20, 30, 40])); // 30
