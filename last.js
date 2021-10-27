function insertionsort(arr) {
    let key = 0
    let y = 0
    for (let i = 1; i < arr.length; i++) {
        key = arr[i]
        y = i - 1
        while (y >= 0 && arr[y] > key) {
            arr[y + 1] = arr[y]
            y--
        }
        arr[y + 1] = key
    }
    return arr
}
console.log(insertionsort([7, 4, 3, 8, 1, 5]));