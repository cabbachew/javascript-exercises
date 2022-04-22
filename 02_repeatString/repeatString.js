const repeatString = function(input, times) {
    if (times < 0)
        return 'ERROR';
    let string = '';
    for (let i = 0; i < times; i++) {
        string += input;
    };
    return string;
};

// Do not edit below this line
module.exports = repeatString;
