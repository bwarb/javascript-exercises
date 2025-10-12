const fibonacci = function(num) {
    let secondLast = 0;
    let last = 0;
    num = parseInt(num);
    if (num < 0) {
        return 'OOPS';
    }
    if (num === 0) {
        return 0;
    }
    for(let i=1; i <= num; i++) {
        if (i === 1) {
            total = 1;
            secondLast = 0;
            last = 1;
        }
        else {
            total = secondLast + last;
            secondLast = last;
            last = total;
        }
    }
    return total;
};

// Do not edit below this line
module.exports = fibonacci;
