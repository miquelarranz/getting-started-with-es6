var red = 'red';
var blue = 'blue';

function Car (plate, color) {
  this.plate = plate;
  this.color = color;
}

Car.prototype.displayInformation = function () {
  return 'The information of your car is:' + ',\n\n' +
  '- Plate: ' + this.plate + '\n' +
  '- Color: ' + this.color;
};

Car.prototype.setInformation = function (information) {
  var plate = information.plate;
  var color = information.color;

  if (color === red || color === blue) { // Simple validation
    this.plate = plate;
    this.color = color;
  } else {
    return 'The color ' + information.color + ' is not a valid color.';
  }
}

// These lines will help you to test the homework
var redCar = new Car('2131232H', red);
var blueCar = new Car();

var information = {
  plate: '1231233K',
  color: blue
};

blueCar.setInformation(information);

console.log('### Homework Part 1 logs ###')
console.log(redCar.displayInformation());
console.log(blueCar.displayInformation());
