const generateGreatestExponent = function (number, base) {
    if (number === 0) return 0;

    let exponent = 0;
    let power = Math.pow(base, exponent);
    while (power < number) {
        exponent++;
        power = Math.pow(base, exponent);
    }
    return (exponent - 1);
}

const getHowManyTimes = function (number, divisor) {
    return Math.floor(number / divisor);
}

const convertNumber = function (number, bigeastExp, base) {
    const convertedNum = [];

    while (bigeastExp > -1) {
        const numBase = Math.pow(base, bigeastExp);
        const times = getHowManyTimes(number, numBase);
        const operation = number - (numBase * times);
        console.log('Value: ', numBase, ' Times: ', times, ' Sobra: ', operation);

        if (operation >= 0) {
            number -= numBase * times;
            convertedNum.push(times);
        } else {
            convertNumber.push(0);
        }

        bigeastExp--;
    }

    return convertedNum;
}
const num = 123;
const base = 4;
const expo = generateGreatestExponent(num, base);
console.log(convertNumber(num, expo, base));