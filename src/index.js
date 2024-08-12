module.exports = function toReadable (number) {
  const uniqueNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",  "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  if (number < 20) {
    return uniqueNumbers[number];
  };

  if (number < 100) {
    //получаем округлением к меньшему номер десятка.
    const tensNumber = Math.floor(number / 10);
    //второе число - остаток от деления на 10;
    const secondNumber = number % 10;

    //возвращаем конкатенацию. десяток - номер элемента в массиве tens плюс число - номер элемента в массиве uniqueNumbers.
    return tens[tensNumber - 2] + (secondNumber ? " " + uniqueNumbers[secondNumber] : "");
  };

  if (number < 1000) {
    //получаем округлением к меньшему номер сотни.
    const hundredsNumber = Math.floor(number / 100);
    //второе число - остаток от деления на 100;
    const balance = number % 100;
    
    //конкатенируем номер сотни из массива uniqueNumbers со словом " hundred"
    //добавляем реузультат выполнения функции toReadable() для двухзначного числа balance
    return uniqueNumbers[hundredsNumber] + " hundred" + (balance ? " " + toReadable(balance) : "");
  };
};
