function checkForSpam(message) {
    // для зручності читання присвоюємо змінним значення

const saleTrigger = 'sale';  
const spamTrigger = 'spam';   


    // приводимо до нижнього регістру

const formattingMassage = message.toLowerCase(); 

// приводимо до бульового значення за допомогою логічного оператора , та передаємо значення викрнання функції
return formattingMassage.includes(saleTrigger) || formattingMassage.includes(spamTrigger)      

}


console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
