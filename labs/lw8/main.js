var string = 'Hello, World';
var newString = '     Sed at       Sed,      consectetur     massa.    ';


console.log('----------------1---------------------');

function last(string) {
  return string.charAt(string.length - 1);
}

console.log('Последний символ строки: ', last(string));

function withoutLast(string) {
  return string.substring(0, string.length - 1);
}

console.log('Без последнего символа строки:', withoutLast(string));

function reverseString(string) {
  return string.split('').reverse().join('');
}

console.log('Зеркальное отображение строки:', reverseString(string));



function removingSpaces(newString) {
  return newString.replace(/\s{2,}/g, ' ').trim();
}


console.log('Удаление пробелов строки:', removingSpaces(newString));






console.log('----------------2---------------------');


function lastTwo(string) {
  return string.slice(-1);
}

console.log('Последний символ строки: ', lastTwo(string));

function withoutLastTwo(string) {
  return string.slice(0, -1);
}

console.log('Без последнего символа строки:', withoutLastTwo(string));


function reverseStringTwo(string) {
  var stringReverseVariable = '';

  for (i = string.length - 1; i >= 0; i--) {
    stringReverseVariable = stringReverseVariable + string.charAt(i);
  }

  return stringReverseVariable;
}

console.log('Зеркальное отображение строки:',reverseStringTwo(string));



function removingSpacesTwo(newString) {
  var condition = 'begin';
  var STATE_WORD = 'word';
  var STATE_SPACE = 'space';
  var stringRemovingSpaces = '';
  
  for (i = 0; i < newString.length; i++) {
    
    if (newString.charAt(i) != ' ') {

      if (condition == STATE_SPACE) {
          stringRemovingSpaces = stringRemovingSpaces + ' ';
      }

      condition = STATE_WORD;
      stringRemovingSpaces = stringRemovingSpaces + newString.charAt(i);

    } else {
        if (condition == STATE_WORD) {
            condition = STATE_SPACE;
        }
      }
  }
  
  return stringRemovingSpaces;
}


console.log('Удаление пробелов строки:', removingSpacesTwo(newString));