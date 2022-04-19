const person = {
    fullName : 'Jessica Milene',
    greet: (callback) => {
        return callback();
    }
}
const greetingPeople = () => {
return `Olá, ${person.fullName}, como vai ?`
}

const casualGreeting = () => {
    return `Fala jov, eu tô bem e você?`
}

const formalGreeting = () => {
    return 'Olá, eu vou bem e você?'
}

console.log(greetingPeople(person));
console.log(person.greet(casualGreeting));
