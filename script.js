let data = require('./food.json');

function foodItems(json) {
  json
    .map(element => console.log(element.foodname));
}
console.log("All the food items");
foodItems(data);

function vegetable(json) {
  json
    .filter(element => element.category == 'Vegetable')
    .map(element => console.log(element.foodname + ': ' + element.category));
}
console.log("Food items with category Vegetable");
vegetable(data);

function fruit(json) {
  json
    .filter(element => element.category == 'Fruit')
    .map(element => console.log(element.foodname + ': ' + element.category));
}
console.log("Food items with category Fruit");
fruit(data);

function protein(json) {
  json
    .filter(element => element.category == 'Protein')
    .map(element => console.log(element.foodname + ': ' + element.category));
}
console.log("Food items with category Protein");
protein(data);

function nuts(json) {
  json
    .filter(element => element.category == 'Nuts')
    .map(element => console.log(element.foodname + ': ' + element.category));
}
console.log("Food items with category Nuts");
nuts(data);

function grain(json) {
  json
    .filter(element => element.category == 'Grain')
    .map(element => console.log(element.foodname + ': ' + element.category));
}
console.log("Food items with category Grain");
grain(data);

function dairy(json) {
  json
    .filter(element => element.category == 'Dairy')
    .map(element => console.log(element.foodname + ': ' + element.category));
}
console.log("Food items with category Dairy");
dairy(data);

function calorieAbove100(json) {
  json
    .filter(element => element.calorie > 100)
    .map(element => console.log(element.foodname + ': ' + element.calorie));
}
console.log("Food items with calorie above 100");
calorieAbove100(data);

function calorieBelow100(json) {
  json
    .filter(element => element.calorie < 100)
    .map(element => console.log(element.foodname + ': ' + element.calorie));
}
console.log("Food items with calorie below 100");
calorieBelow100(data);

function sortByprotein(json) {
  json
    .concat().sort((a, b) => b.protiens - a.protiens)
    .map(element => console.log(element.foodname, element.protiens));
}
console.log("Food items sorted by highest to lowest protein content");
sortByprotein(data);

function sortByCab(json) {
  json
    .concat().sort((a, b) => a.cab - b.cab)
    .map(element => console.log(element.foodname, element.cab));
}
console.log("Food items sorted by lowest to highest carb content");
sortByCab(data);






