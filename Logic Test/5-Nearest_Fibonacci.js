
function jumlah(arr) {
    arr = []

    var total = 0;

    for (i = 0; i < arr.length; i++) {
        total += arr[i];
    };
    return total
}
function fibonacci(arr) {

    const sum = jumlah(arr)
    let pref = 1, temp = 0, fibbonaci = 0;
    while (fibbonaci < sum) {
        temp = pref;
        pref = pref + fibbonaci;
        fibbonaci = temp;
    }
    return fibbonaci - sum
}

console.log(fibonacci([15, 1, 3]))