module.exports = function toReadable (number) {

    if(number === 0){
        return "zero";
    }

    let h = Math.floor(number / 100);
    let d = number % 100;

    let hR = h > 0 ? NUM(h) : null;
    let dR = d > 0 ? calcDec(d) : null;

    let res = '';

    if(hR !== null) 
        res = `${hR} hundred`;

    if(dR !== null) 
        res = res.length > 0 ? `${res} ${dR}` : dR;

    return res;
}

const NUM = (number) => {
    switch(number) {
        case 1: return "one";
        case 2: return "two";
        case 3: return "three";
        case 4: return "four";
        case 5: return "five";
        case 6: return "six";
        case 7: return "seven";
        case 8: return "eight";
        case 9: return "nine";
        case 10: return "ten";
        case 11: return "eleven";
        case 12: return "twelve";
        case 13: return "thirteen";
        case 14: return "fourteen";
        case 15: return "fifteen";
        case 16: return "sixteen";
        case 17: return "seventeen";
        case 18: return "eighteen";
        case 19: return "nineteen";
        case 20: return "twenty";
        case 30: return "thirty";
        case 40: return "forty";
        case 50: return "fifty";
        case 60: return "sixty";
        case 70: return "seventy";
        case 80: return "eighty";
        case 90: return "ninety";
    }
}

let calcDec = (number) => {
    if(number < 20)
        return NUM(number);

    let n = number % 10;
    let d = Math.floor(number - n);       

    return n > 0 ? `${NUM(d)} ${NUM(n)}` : NUM(d);
}

