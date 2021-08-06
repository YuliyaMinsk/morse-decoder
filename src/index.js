const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    let decodedString = '';
    let morseString = '';

    for (let i = 0; i < expr.length; (i += 10)) {
        //console.log ('Substr[' + i + ']: ' + expr.substr(i, 10));
        morseString = '';
        for (let j = 0; j < 10; j +=2 ) {
            if (expr.substr(i+j, 2) === '**') {morseString = morseString + ' '; break;}
            if (expr.substr(i+j, 2) === '00') continue;
            if (expr.substr(i+j, 2) === '10') morseString = morseString + '.';
            else  if (expr.substr(i+j, 2) === '11') morseString = morseString + '-';
        }
        //console.log(MORSE_TABLE[morseString]);
        if (morseString == ' ') decodedString = decodedString + ' ';
        else decodedString = decodedString + MORSE_TABLE[morseString];
    }
    //console.log(decodedString);
    return decodedString;
}



module.exports = {
    decode
}