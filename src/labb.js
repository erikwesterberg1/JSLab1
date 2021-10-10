
function sum(a, b) {
    return a + b;
}

function myOwnMultiplyFunction(int1, int2) {
    return int1 * int2;
}


function isBelowZero(int) {
    if (int < 0) {
        return true;
    }
    else return false;
    
}

function round(number){
    const roundedNumber = Math.round(number);
    return roundedNumber;
}


function addingUp(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
}

function findMinMax(arrParameter) {
    let arr = arrParameter.sort((a, b) => a - b);
    let obj = {
        min: arr[0],
        max: arr[arr.length -1]
    }
    return obj;
    
}

function afterXmasEve2020(date) {

    var christmas = new Date('2020-12-24');
    var givenDate = new Date(`${date}`);
    let res;
    if (givenDate.getTime() < christmas.getTime()) {
        console.log('hi');
        res = false;
    } 
    else if (givenDate.getTime() >= christmas.getTime()) {
        res = true;
    }
    return res;
}

function sortByStringLength(arrParameter) {
    let arr = arrParameter.sort((a, b) => a.length - b.length);
    return arr;
}

function charCounter(letter, sentance) {
    //Using regular expresions to filter out the letter argument and then counting the length of the splitted string. the "I"-flag is for capital letters
    let counted = sentance.split(new RegExp( `${letter}`, "i" )).length -1;
    return counted;
}

function numbersOnly(arr) {

    var removeFalsys = arr.filter(e => (e === 0 || e)); //removes all null(ish) values
    var onlyNums = removeFalsys.filter(e => typeof e === 'number'); //remove all strings etc
    return onlyNums; 
}

function sortNumbers(arr, val) {
    if (val === 1) {
        arr.sort((a, b) => a - b)
        return arr;
    }
    else if (val === -1) {
        arr.sort((a, b) => b - a)
        return arr;
    }
}

function convertToUppercase(inputString) {
    const str = inputString;
    const outputString = str.charAt(0).toUpperCase() + str.slice(1);
    return outputString;
}

function personFactory(firstname, lastname) {
    this.firstname = convertToUppercase(firstname);
    this.lastname = convertToUppercase(lastname);
    this.fullname = `${convertToUppercase(firstname)} ${convertToUppercase(lastname)}`;
    this.initials = `${convertToUppercase(firstname).charAt(0)}.${convertToUppercase(lastname).charAt(0)}`;
    
}

function doublePrice(products) {
    products.forEach(prod => {
        prod['price'] = prod['price'] * 2;
    });
    return products;
}

function and(a, b) {
    if((a?1:0)+(b?1:0)==2) 
        return true;
    else
        return false;
}

function removeLeadingTrailing(number) {
    let n = parseFloat(number);
    return n;
}

function getKeysAndValues(obj) {
    const o = {
        keys: [],
        values: []
    }
    for (const prop in obj) {
        o.keys.push(`${prop}`)
        o.values.push(obj[prop])
    }
    return o;
}

// https://eloquentjavascript.net/10_modules.html#h_N33QHgUxbG how require and modules work in JavaScript
module.exports.sum = sum
module.exports.multiply = myOwnMultiplyFunction
module.exports.isBelowZero = isBelowZero
module.exports.round = round
module.exports.addingUp = addingUp
module.exports.findMinMax = findMinMax
module.exports.afterXmasEve2020 = afterXmasEve2020
module.exports.sortByStringLength = sortByStringLength
module.exports.charCounter = charCounter
module.exports.numbersOnly = numbersOnly
module.exports.sortNumbers = sortNumbers
module.exports.personFactory = personFactory
module.exports.doublePrice = doublePrice
module.exports.and = and
module.exports.removeLeadingTrailing = removeLeadingTrailing
module.exports.getKeysAndValues = getKeysAndValues
