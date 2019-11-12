// var markHeight = 2;
// var markMass = 81;

// var johnHeight = 1.8;
// var johnMass = 95;

// var markBMI =  markMass / (markHeight * markHeight);
// var johnBMI = johnMass / (johnHeight * johnHeight);

// var markHigher = markBMI < johnBMI;

//console.log('Is Mark\'s BMI higher than John\'s? ', markHigher, 'Mark\'s BMI is ' + markBMI + ' and John\'s BMI is ' + johnBMI);

// if (markBMI > johnBMI) {
//   console.log('Mark\'s BMI is higher than John\'s');
// } else {
//   console.log('John\'s BMI is higher than Mark\'s');
// }

// IF & ELSE 

var name = 'Koko';
// var status = 'single';

// if (status === 'married'){
//   console.log(name + ' is married.');
// } else {
//   console.log(name + ' is living her best life!');
// };

// var isMarried = false;
// if (isMarried){
//   console.log(name + ' is married.');
// } else {
//   console.log(name + ' is living her best life!');
// };


var age = 1

// if (age < 13){
//   console.log(name + ' is a child.');
// } else if (age >= 13 && age < 20) {
//   console.log(name + ' is a teenager');
// } else if (age >= 20 && age < 30) {
//   console.log(name + ' is an adult');
// } else {
//   console.log(name + ' needs to get their shit together');
// }


// TERNARY & SWITCH

// age >= 18 ? console.log(name + ' drinks tequila') : console.log(name + ' drinks juice');

// var drink = age >= 21 ? 'tequila' : 'juice';

// console.log(name + ' drinks ' + drink);

// var job = 'developer'

// switch (job) {
//   case 'developer':
//     console.log(name + ' develops code.');
//     break
//   case 'driver':
//     console.log(name + ' drives an uber in Seattle.');
//     break
//   case 'designer':
//     console.log(name + ' makes beautiful clothes.');
//     break
//   default:
//     console.log(name + ' does something else.');
// }


// switch (true) {
//   case age < 13:
//     console.log(name + ' is a child.');
//     break
//   case age >= 13 && age < 20:
//     console.log(name + ' is a teenager');
//     break
//   case age >= 20 && age < 30:
//     console.log(name + ' is an adult');
//     break
//   default:
//     console.log(name + ' needs to get their shit together');
// }

// if (age < 13){
//   console.log(name + ' is a child.');
// } else if (age >= 13 && age < 20) {
//   console.log(name + ' is a teenager');
// } else if (age >= 20 && age < 30) {
//   console.log(name + ' is an adult');
// } else {
//   console.log(name + ' needs to get their shit together');
// }

// Coding Challenge Two

// var johnAvg = (89+120+103) / 3;
// var mikeAvg = (116+94+123) / 3;
// var maryAvg = (97+134+105) / 3;

// console.log(johnAvg, mikeAvg, maryAvg);


// if (johnAvg > mikeAvg && johnAvg > maryAvg) {
//   console.log('John has a higher average of ' + johnAvg);
// } else if (maryAvg > mikeAvg && maryAvg > johnAvg) {
//   console.log('Mary has the higher average of ' + maryAvg);
// } else if (mikeAvg > johnAvg && mikeAvg > maryAvg){
//   console.log('Mike has a higher average of ' + mikeAvg);
// } else {
//   console.log('There\'s a draw');
// }

// age >= 18 ? console.log(name + ' drinks tequila') : console.log(name + ' drinks juice');

// johnAvg > mikeAvg ?  console.log('John has a higher average of ' + johnAvg) : console.log('Mike has a higher average of ' + mikeAvg);


// FUNCTIONS

// function calculateAge (birthYear) {
//   return 2019 - birthYear;
// }

// function retirementYear (year, name) {
//   var age = calculateAge(year)
//   var retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(name + ' retires in ' + retirement + ' years.');
//   } else {
//     console.log(name + ' is already retired.');
//   }
// }

// // retirementYear(1964, 'Koko');

// var whatYouDo = function (job, name) {
//   switch(job) {
//     case 'teacher' : return name + ' teaches people how to code';
//     case 'driver' : return name + ' dives an uber in Seattle';
//     case 'designer': return name + ' designs websites.';
//     default : return name + ' does something else';
//   }
// }

// console.log(whatYouDo('teacher', 'Koko'));

// ARRAYS

// var names = ['John','Mike', 'Jane']
// var years = new Array(1990, 1969, 1948);

// console.log(names);

// names[1] = 'Koko'
// names[names.length] = 'Mary'
// console.log(names);

// var koko = ['Koko', 'Kassa', 1994, 'developer', false]
// console.log(koko);

// koko.push('black')
// console.log(koko);


// CODING CHALLENGE THREE

// function tipCalculator(bill) {
//   if (bill => 50) {
//     return bill * .2;
//   } else if  (bill < 50 && bill >= 200) {
//     return bill * .15
//   } else {
//     bill * .1
//   }
// }

// var bills = [124,48,268]
// console.log(bills);

// var tips = [tipCalculator(bills[0]),tipCalculator(bills[1]), tipCalculator(bills[2])];
// console.log(tips);

// bills.push(tips[0], tips[1], tips[2])
// console.log(bills);

// OBJECTS & PROPERTIES

// var koko = {
//   firstName: 'Koko',
//   lastName: 'Kassa',
//   birthYear: 1994,
//   family: ['Sam', 'Shams', 'Nadia', 'Fedilla', 'Ahilla'],
//   job: 'developer',
//   isMarried: false,
//   calcAge: function() {
//     this.age = 2019 - this.birthYear;
//   }
// }

// // koko.calcAge();
// // console.log(koko);


// // CODING CHALLENGE FOUR

// var Mark = {
//   firstName: 'Mark',
//   lastName: 'Smith',
//   height: 2,
//   mass: 81,
//   calcBMI: function() {
//     this.BMI = this.mass / (this.height *2);
//   }
// }

// var John = {
//   firstName: 'John',
//   lastName: 'Smith',
//   height: 1.8,
//   mass: 95,
//   calcBMI: function() {
//     this.BMI = this.mass / (this.height *2);
//   }
// }
// Mark.calcBMI();
// John.calcBMI()
// console.log(Mark);
// console.log(John);

// var highestBMI = Mark.BMI >  John.BMI ? console.log( Mark.firstName + ' ' + Mark.lastName + ' has a a higher BMI at ' + Mark.BMI) : console.log(John.firstName + ' ' + John.lastName + ' has a higher BMI at ' + John.BMI);


// LOOPS & ITERATIONS

// var koko = ['Koko', 'Kassa', 1994, 'developer', false]

// for (var i= 0; i < koko.length; i++){
//   console.log(koko[i]);
// }

// var i = 0
// while (i < koko.length){
//    console.log(koko[i]);
//     ++i;
// }

// for (var i= 0; i < koko.length; i++){
//   if (typeof koko[i] !== 'string') continue
//   console.log(koko[i]);
// }

// for (var i= 0; i < koko.length; i++){
//   if (typeof koko[i] !== 'string') break
//   console.log(koko[i]);
// }

// for (var i = koko.length-1; i>= 0; i--){
//   console.log(koko[i]);
// }



// CODING CHALLENGE FIVE

// function tipCalculator(bill) {
//   if (bill => 50) {
//     return bill * .2;
//   } else if  (bill < 50 && bill >= 200) {
//     return bill * .15
//   } else {
//     return bill * .1
//   }
// }

// var bills = [124,48,268]
// console.log(bills);

// var tips = [tipCalculator(bills[0]),tipCalculator(bills[1]), tipCalculator(bills[2])];
// console.log(tips);

// bills.push(tips[0], tips[1], tips[2])
// console.log(bills);

var john = {
  name: 'John Smith',
  bills: [124,48,268,180,42],
  final: [],
  tips: [],
  tipCalculator: function () {
    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      if (this.bills[i] < 50) {
        percentage = .2;
      } else if  (this.bills[i] >= 50 && this.bills[i] < 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }
      this.tips[i] =  this.bills[i] * percentage;
      this.final[i] = this.bills[i] + this.bills[i] * percentage;
    }
  }
}

var mark = {
  name: 'Mark Miller',
  bills: [77,475,110,45],
  final: [],
  tips: [],
  tipCalculator: function () {
    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      if (this.bills[i] < 100) {
        percentage = .2;
      } else if  (this.bills[i] >= 100 && this.bills[i] < 300) {
        percentage = .1;
      } else {
        percentage = .25;
      }
      this.tips[i] =  this.bills[i] * percentage;
      this.final[i] = this.bills[i] + this.bills[i] * percentage;
    }
  }
}

john.tipCalculator();
mark.tipCalculator();
console.log(john);
console.log(mark);

john.avg = (john.tips.reduce((a, b) => a + b, 0)) /  john.tips.length;
mark.avg = (mark.tips.reduce((a, b) => a + b, 0)) / mark.tips.length;

john.avg > mark.avg ? console.log('John spends more on tips: ' + john.avg) : console.log('Mark spends more on tips: ' + mark.avg);
