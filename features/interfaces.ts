// interface Vehicle {
//   name: string;
//   year: Date;
//   broken: boolean;
//   summary(): string;
// }

// can simplify to --->

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
};

const newDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `my drink has ${this.sugar} grams of sugar`
  }
}

// const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
// rewrite with interface
const printReport = (item: Reportable): void => {
  // console.log(`Name: ${vehicle.name}`)
  // console.log(`Year: ${vehicle.year}`)
  // console.log(`Broken? ${vehicle.broken}`)
  console.log(item.summary())
}
printReport(oldCivic);
printReport(newDrink)