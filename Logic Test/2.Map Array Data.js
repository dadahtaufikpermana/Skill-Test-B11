function productArray(arrayInt) {
    let output = [];
    for (var i = 0; i < arrayInt.length; i++) {
        const filteredarray = arrayInt.filter(checkArray);
        function checkArray(item, index) {
            return index != i
        }
        let multiply = 1
        for (let j = 0; j < filteredarray.length; j++) {
            multiply = multiply * filteredarray[j]
        }
        output.push(multiply)
    }
    return output;
}



console.log(productArray([12, 20]))
console.log(productArray([12, 20]))
console.log(productArray([3, 27, 4, 2]))
console.log(productArray([13, 10, 5, 2, 9]))
console.log(productArray([16, 17, 4, 3, 5, 2]))


