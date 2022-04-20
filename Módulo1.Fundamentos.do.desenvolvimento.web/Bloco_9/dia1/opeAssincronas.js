// // assincrono - acontce depois de algum tempo
// // sincrono - acontece naquele dado momento 

// setTimeout(()=>{
// console.log("Hello Word");
// }, 1000);

// Garantir que o milkShake só seja entregue depois do big matchMedia

const prepararBigMac =  (callback) =>
setTimeout(() => {
    console.log('1- Big Mac');
    callback();
}, Math.random() * 2000);
const prepareMlkShake = () =>
setTimeout(() => console.log(' 2 - Milk Shake'), Math.random() * 2000);
console.log('Inicio');
prepararBigMac(prepareMlkShake);
console.log('Fim');