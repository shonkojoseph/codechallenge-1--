// a function that accepts a string and change it's case
function inputString(enterString) {
    const changingCharacters = Array.from(enterString, character => {
        if (character === character.toUpperCase()) {
            return character.toLowerCase();
        } else {
            return character.toUpperCase();
        }
    });
    return changingCharacters.join('');
}

const enterStringString = "I am Joseph Shonko";
const displayString = (inputString);
console.log(outputString);