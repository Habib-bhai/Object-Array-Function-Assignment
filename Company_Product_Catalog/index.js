"use strict";
// Assignment 3: Company Product Catalog
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.
let inventory = [];
let product1 = {
    name: "Smartphone",
    model: "Galaxy S22",
    cost: 799.99,
    quantity: 100
};
let product2 = {
    name: "T-shirt",
    model: "Galaxy S22",
    cost: 8000,
    quantity: 1000
};
let product3 = {
    name: "Tesla",
    model: "Galaxy S22",
    cost: 7999999,
    quantity: 20
};
inventory.push(product1, product2, product3); //adding product objs into the empty array
console.log(inventory[1].quantity); // accessing specific property in an obj inside the inventory array.
let product4 = {
    name: " watch",
    model: "Galaxy S22 Ultra Pro Max 6G Mia bhai",
    cost: 99999999999999999999999,
    quantity: 2
};
inventory.push(product4); //adding new product into the inventory array.
// accessing property of an obj inside the inventory array.
console.log(inventory[3].model);
