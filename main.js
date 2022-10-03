const inputNumber = document.querySelector('.number-input');
const inputBase = document.querySelector('.base-input');
const divWarning = document.querySelector('#warning-box');
const divResult = document.querySelector('.final-result-box');
const footer = document.querySelector('#footer'); 
const btnHome = document.getElementById('home-btn');

let number = 0;
let base = 0;
let convertedNumber = [];

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

const removeWarning = function () {
    const warningContainer = document.querySelector('.btn-warning');
    warningContainer.style.display = 'none';
}

const clearInputs = function (clearResult = true) {
    inputBase.value = '';
    inputNumber.value = '';
    number = 0;
    base = 0;
    convertedNumber = [];
    if (clearResult) divResult.innerHTML = '';
}

const process = function () {
    number = Number.parseInt(inputNumber.value);
    base = Number.parseInt(inputBase.value);

    if (number <= 0 || base <= 0) {
        const html = `
            <article class="message is-danger btn-warning">
                <div class="message-header">
                    <p>Atenção</p>
                    <button onclick="removeWarning()" class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">Apenas números <strong>naturais</strong> são aceitos.</div>
            </article>
        `;

        divWarning.insertAdjacentHTML('afterbegin', html);
        clearInputs();
    } else {
        const exponent = generateGreatestExponent(number, base);
        convertedNumber = convertNumber(number, exponent, base);

        const html = `
            <span class="final-result">${number}
            <span class="base-number">(10)</span>
            &nbsp;=&nbsp;
            </span>
            <span class="final-result">${convertedNumber.reduce((acc, cur) => acc + cur + ' ', '')}
            <span class="base-number">(${base})</span>
            </span>
        `;

        divResult.insertAdjacentHTML('afterbegin', html);
        clearInputs(false);
    }
}

btnHome.addEventListener('click', () => {
    footer.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
});