
function maxRedigit(input) {
    input = input.toString()
    var output = null
    if (input.length != 3 || Number(input) < 0) {
        return output
    }
    input = input.split("").map(angka => Number(angka)).sort((after, before) => before - after)
    output = Number(input.join(""))

    return output
}
console.log(maxRedigit(123))
console.log(maxRedigit(231))
console.log(maxRedigit(321))
console.log(maxRedigit(-1))
console.log(maxRedigit(0))
console.log(maxRedigit(99))
console.log(maxRedigit(1000))
