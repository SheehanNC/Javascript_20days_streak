function countString(str, letter) {
    let c = 0;
    for (let i = 0; i < str.length; i++) {

        if (str.charAt(i) == letter) {
            c ++;
        }
    }
    return c;
}

const S = prompt('Enter the string: ');
const L = prompt('Enter the letter: ');

const New_String = countString(S, L);
alert(New_String);
