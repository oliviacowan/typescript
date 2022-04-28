// use annotation when initializing empty array

const carMakers = ['Ford', 'Toyota', 'Chevy'];

// type: Date[]
const dates = [new Date(), new Date()];

// type: string[][]
const carsByMake = [
  ['f150'],
  ['corolla'], 
  ['camaro']
];

// help with inference when extracting values
const cars = carMakers[0];
const myCars = carMakers.pop();

// prevent incompatible values --
//carMakers.push(8) will error

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
})

// Flexible types
const importantDates = [new Date(), '2030-10-10'];

importantDates.push('2030-09-07');
importantDates.push(new Date());
// importantDates.push(8) gives error