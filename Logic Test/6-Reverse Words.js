
function reverseEachWord(str) {
    var newStringArr = str.split(" ");
    for (var i = 0; i < newStringArr.length; i++) {
        newStringArr[i] = newStringArr[i].split("");
        newStringArr[i].reverse();
        newStringArr[i] = newStringArr[i].join("");
    }
    newStringArr = newStringArr.join(" ");
    return newStringArr;
};

var someString = "I am A Great human";
console.log(reverseEachWord(someString));


