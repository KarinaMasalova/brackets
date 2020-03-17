module.exports = function check(str, bracketsConfig) {

    const arrayOfBrackets = bracketsConfig.map(item => item.join(''));

    for(let i = 0; i < arrayOfBrackets.length; i++) {
        if(str.includes(arrayOfBrackets[i])) {
            str = str.replace(arrayOfBrackets[i], '');
            i = -1;
        }
    }

    return str ? false : true;
}
