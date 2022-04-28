const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};


const pepsi: [string, boolean, number] = ['brown', true, 40];
// pepsi[2] = true will error

// with type alius
type Drink = [string, boolean, number]

const sprite: Drink = ['clear', true, 30];
const tea: Drink = ['brown', false, 0]

const carSpecs: [number, number] = [400, 3354]

// makes what numbers are clear
const carStats = {
  horsepower: 400,
  weight: 3354
};