const sumAll= (number1,number2 ) => {
    let sum = 0;
    let array = [number1,number2]
    array.forEach((element)=> {
        sum+=element
    })
    console.log(sum);
} 
sumAll(1,2)