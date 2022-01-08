module.exports = function toReadable(number) {
    let hundreds = Math.floor(number / 100);
    let tens = Math.floor(number % 100 / 10);
    let ones = Math.floor(number % 10);
    if (tens > 9) {
        tens = Math.floor(tens % 10);
    }
    let numbersNames = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    };

    let mediumNumbers = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };
    let str = '';

	if(number === 0){
		return 'zero';
	}

    if (hundreds) {
        str += `${numbersNames[hundreds]} hundred`;
    }

    if (tens) {
        if (tens > 1) {
            str += ` ${mediumNumbers[tens]}`;
        } else if (tens === 1) {
            tens = +`${tens}${ones}`;
            str += ` ${mediumNumbers[tens]}`;
            ones = 0;
        }
    }

    if (ones) {
        str += ` ${numbersNames[ones]}`;
    }

    return str.trim();
};
