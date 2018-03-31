var string = "Hello, World";
var newSring = "       Hello,       World!";

function last() {
  return string.slice(-1);
}

console.log('Последний символ строки:', last(string));

function withoutLast() {
  return string.slice(0, -1);
}

console.log('Без последнего символа строки:', withoutLast(string));

function reverseStr() {
  return string.split("").reverse().join("");
}

console.log('Зеркальное отображение строки:', reverseStr(string));

function removingSpaces() {
  return newSring.trim().replace(/\s+/g, ' ');
}

console.log('Удаление пробелов строки:', removingSpaces(newSring));