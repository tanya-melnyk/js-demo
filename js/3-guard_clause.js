/*
  The guard clause is a check that immediately exits the function with a return statement.
*/

// function processData(data) {
//   if (data) {
//     const dataCopy = data.slice();
//     const processedData = [];

//     for (const item of dataCopy) {
//       processedData.push(item * 0.9);
//     }

//     return processedData;
//   }

//   console.log('No data!');
//   return null;
// }

// function processData(data) {
//   if (!data) {
//     console.log('No data!');
//     return null;
//   }

//   const dataCopy = data.slice();
//   const processedData = [];

//   for (const item of dataCopy) {
//     processedData.push(item * 0.9);
//   }

//   return processedData;
// }

// const result = processData([5, 9, 12]);
// console.log(result);

// const result2 = processData(null);
// console.log(result2);

/////////////////////////////////////////////////////////

// Переписати тіло функції за допомогою раннього повернення

// const offerMeTrip = function (uahAmount) {
//   let message = '';

//   if (uahAmount >= 20000) {
//     message = 'Welcome to Turkey';
//   } else if (uahAmount >= 10000) {
//     message = 'Welcome to Truskavets';
//   } else {
//     message = 'Go to work';
//   }

//   return message;
// };

// const offerMeTrip = function (uahAmount) {
//   let message = '';

//   if (uahAmount >= 20000) {
//     message = 'Welcome to Turkey';
//     return message;
//   }

//   if (uahAmount >= 10000) {
//     message = 'Welcome to Truskavets';
//     return message;
//   }

//   message = 'Go to work';
//   return message;
// };

// const offerMeTrip = function (uahAmount) {
//   if (uahAmount >= 20000) {
//     return 'Welcome to Turkey';
//   }

//   if (uahAmount >= 10000) {
//     return 'Welcome to Truskavets';
//   }

//   return 'Go to work';
// };

// const tripOffer = offerMeTrip(15000);
// console.log(tripOffer);
