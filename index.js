// завдання 1
// const user = {

//     hobby: "dvdbfbfb",
//     premium: true,

// }

// const {mood, hobby, premium} = user;

// hobby = "skydiving";

// mood = "happy";

// premium = false;

// for(const i of Object.keys(user)){
//     
// console.log(`${i}: ${user[user]}`)
// }


// завдання 4

// function countTotalSalary(employees){

//     let totalSalary = 0

//     for(const worker in workerss){
//         totalSalary += workerss[worker]
//     }
//     return totalSalary;
// }
// const employee = {
//     Jon: 1000,

//     Alina: 1500,

//   };

// const worker = {
//     //     Max: 1200,

// //     Nastya: 2000
// }

// const employeesss = {...employee, ...worker};


//   console.log(countTotalSalary(employeesss));


// завдання 5

// function getAllPropValues(arr, prop) {

//   for (const object of arr) {

//   console.log(object[prop]);

//   }
// }

// const watter = [

//   { name: "Morshynska", price: 23 },
//   { name: "Morshynska", price: 23 },

// ];


// const Morshynska = [
// //   { name: "Morshynska", price: 23 },
// //   { name: "Morshynska", price: 23 },
// ]

// const waters = {...Morshynska, ...watter};

// console.log(getAllPropValues(waters, `price`));


// завдання6

 function calculateTotalPrice(allProdcuts, productName){
        let Price = 0;

        for(const product of allProdcuts){
        
            if(product.name === productName){

                Price = product.price * product.sprat;
            }
        }
        return Price;
    }
    
    const products = [
        { name: 'watter', price: 23, sprat: 10 },
        { name: 'banana', price: 48, sprat: 2  },
        { name: 'pasta', price: 74, sprat: 3  },
        { name: 'cheese', price: 125, sprat: 4  }
      ];


    
    console.log(calculateTotalPrice(products, 'cheese'));
    console.log(calculateTotalPrice(products, 'watter'));
    console.log(calculateTotalPrice(products, 'banana'));
    console.log(calculateTotalPrice(products, 'pasta'));



// завдання з банком
// const acount = {

//     balance : 1000000,

//     istory : ["+2000", "-150", "-740", "+600", "-500"],


// }

// function LastTranslation(...istory) {

//     for(const translation of istory) {

//     return translation;
//     }
    
//  }

// function newBalance(balance) {

//     let newBalance = 100;

//     const stringTo = prompt("Введіть суму вкладення")

//     const numberTo = Number.parseInt(stringTo);

//     if (100000 > numberTo > 0) {
//        newBalance = balance + numberTo;

//        return `Ваш рахунок  поповнено Баланс - ${newBalance}`
//     }
//     else {
//         return "вибачте("
//     }


//  }

// console.log(LastTranslation(...acount.istory));


// console.log(newBalance(acount.balance));

