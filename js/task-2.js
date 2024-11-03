function formatMessage(message, maxLength) {
    
// змінна для додавання нового рядка


const newAndMessage = '...'; 

// перевірка довжини виразу та підставлення необхідних параметрів за допомогою конкатинації.

if(maxLength < message.length){           

 

return message.slice(0, maxLength) + newAndMessage; 

} else{
return message;
}

    
}


console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"