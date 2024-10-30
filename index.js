"use strict";
//Start Tallest Mountain Code
//declare array called mountains
const mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 },
    { name: "K2", height: 28251 },
    { name: "Makalu", height: 27838 },
    { name: "Olympus Mons", height: 50000 },
];
//function to find tallest mountain
function findNameOfTallestMountain(mountains) {
    let tallestMountain = mountains[0];
    for (let i = 1; i < mountains.length; i++) {
        if (mountains[i].height > tallestMountain.height) {
            tallestMountain = mountains[i];
        }
    }
    return tallestMountain.name;
}
//call function and log result
console.log(findNameOfTallestMountain(mountains)); // Everest
//declare array called products with a list of products
const products = [
    { name: "Laptop", price: 999.99 },
    { name: "Smartphone", price: 699.99 },
    { name: "Tablet", price: 399.99 },
    { name: "Anime Replica of Princess Leia", price: 4449.99 },
];
//function to find the most expensive product
function findMostExpensiveProduct(products) {
    let mostExpensiveProduct = products[0];
    for (let i = 1; i < products.length; i++) {
        if (products[i].price > mostExpensiveProduct.price) {
            mostExpensiveProduct = products[i];
        }
    }
    return mostExpensiveProduct.name;
}
//function to find average price of all products
function findAveragePrice(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].price;
    }
    return total / products.length;
}
//call functions and display product results
console.log(findMostExpensiveProduct(products)); // Anime Replica of Princess Leia
console.log(findAveragePrice(products)); //  
//declare array called inventory with a list of items
const inventory = [
    { name: "Laptop", quantity: 10 },
    { name: "Smartphone", quantity: 25 },
    { name: "Tablet", quantity: 15 },
    { name: "Anime Replica of Princess Leia", quantity: 5 },
];
//function to find total quantity of all items in inventory
function findTotalQuantity(inventory) {
    let total = 0;
    for (let i = 0; i < inventory.length; i++) {
        total += inventory[i].quantity;
    }
    return total;
}
//call function and log result
console.log(findTotalQuantity(inventory)); // 55
//End Inventory Code
