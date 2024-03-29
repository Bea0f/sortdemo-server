"use strict";

const {Product} = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Product.create({ 
      name: "Chai", 
      unitPrice: 18, 
      stockLevel: 39 
    });
    await Product.create({ 
      name: "Chang", 
      unitPrice: 19.0, 
      stockLevel: 17 
    });
    await Product.create({
      name: "Aniseed Syrup",
      unitPrice: 10.0,
      stockLevel: 13,
    });
    await Product.create({
      name: "Chef Antons Cajun Seasoning",
      unitPrice: 22.0,
      stockLevel: 53,
    });
    await Product.create({
      name: "Chef Antons Gumbo Mix",
      unitPrice: 21.35,
      stockLevel: 0,
    });
    await Product.create({
      name: "Grandmas Boysenberry Spread",
      unitPrice: 25.0,
      stockLevel: 120,
    });
    await Product.create({
      name: "Uncle Bobs Organic Dried Pears",
      unitPrice: 30.0,
      stockLevel: 15,
    });
    await Product.create({
      name: "Northwoods Cranberry Sauce",
      unitPrice: 40.0,
      stockLevel: 6,
    });
    await Product.create({
      name: "Mishi Kobe Niku",
      unitPrice: 97.0,
      stockLevel: 29,
    });
    await Product.create({ 
      name: "Ikura", 
      unitPrice: 31.0, 
      stockLevel: 31 
    });
    await Product.create({
      name: "Queso Cabrales",
      unitPrice: 21.0,
      stockLevel: 22,
    });
    await Product.create({
      name: "Queso Manchego La Pastora",
      unitPrice: 38.0,
      stockLevel: 86,
    });
    await Product.create({ 
      name: "Konbu", 
      unitPrice: 6.0, 
      stockLevel: 24 
    });
    await Product.create({ 
      name: "Tofu", 
      unitPrice: 23.25, 
      stockLevel: 35 
    });
    await Product.create({
      name: "Genen Shouyu",
      unitPrice: 15.5,
      stockLevel: 39,
    });
    await Product.create({ 
      name: "Pavlova", 
      unitPrice: 17.45, 
      stockLevel: 29 
    });
    await Product.create({
      name: "Alice Mutton",
      unitPrice: 39.0,
      stockLevel: 0,
    });
    await Product.create({
      name: "Carnarvon Tigers",
      unitPrice: 62.5,
      stockLevel: 42,
    });
    await Product.create({
      name: "Teatime Chocolate Biscuits",
      unitPrice: 9.2,
      stockLevel: 25,
    });
    await Product.create({
      name: "Sir Rodneys Marmalade",
      unitPrice: 81.0,
      stockLevel: 40,
    });
    await Product.create({
      name: "Sir Rodneys Scones",
      unitPrice: 10.0,
      stockLevel: 3,
    });
    await Product.create({
      name: "Gustafs Knäckebröd",
      unitPrice: 21.0,
      stockLevel: 104,
    });
    await Product.create({ 
      name: "Tunnbröd", 
      unitPrice: 9.0, 
      stockLevel: 61 
    });
    await Product.create({
      name: "Guaraná Fantástica",
      unitPrice: 4.5,
      stockLevel: 20,
    });
    await Product.create({
      name: "NuNuCa Nuß-Nougat-Creme",
      unitPrice: 14.0,
      stockLevel: 76,
    });
    await Product.create({
      name: "Gumbär Gummibärchen",
      unitPrice: 31.23,
      stockLevel: 15,
    });
    await Product.create({
      name: "Schoggi Schokolade",
      unitPrice: 43.9,
      stockLevel: 49,
    });
    await Product.create({
      name: "Rössle Sauerkraut",
      unitPrice: 45.6,
      stockLevel: 26,
    });
    await Product.create({
      name: "Thüringer Rostbratwurst",
      unitPrice: 123.79,
      stockLevel: 0,
    });
    await Product.create({
      name: "Nord-Ost Matjeshering",
      unitPrice: 25.89,
      stockLevel: 10,
    });
    await Product.create({
      name: "Gorgonzola Telino",
      unitPrice: 12.5,
      stockLevel: 0,
    });
    await Product.create({
      name: "Mascarpone Fabioli",
      unitPrice: 32.0,
      stockLevel: 9,
    });
    await Product.create({ 
      name: "Geitost", 
      unitPrice: 2.5, 
      stockLevel: 112 
    });
    await Product.create({
      name: "Sasquatch Ale",
      unitPrice: 14.0,
      stockLevel: 111,
    });
    await Product.create({
      name: "Steeleye Stout",
      unitPrice: 18.0,
      stockLevel: 20,
    });
    await Product.create({
      name: "Inlagd Sill",
      unitPrice: 19.0,
      stockLevel: 112,
    });
    await Product.create({
      name: "Gravad lax",
      unitPrice: 26.0,
      stockLevel: 11,
    });
    await Product.create({
      name: "Côte de Blaye",
      unitPrice: 263.5,
      stockLevel: 17,
    });
    await Product.create({
      name: "Chartreuse verte",
      unitPrice: 18.0,
      stockLevel: 69,
    });
    await Product.create({
      name: "Boston Crab Meat",
      unitPrice: 18.4,
      stockLevel: 123,
    });
    await Product.create({
      name: "Jacks New England Clam Chowder",
      unitPrice: 9.65,
      stockLevel: 85,
    });
    await Product.create({
      name: "Singaporean Hokkien Fried Mee",
      unitPrice: 14.0,
      stockLevel: 26,
    });
    await Product.create({
      name: "Ipoh Coffee",
      unitPrice: 46.0,
      stockLevel: 17,
    });
    await Product.create({
      name: "Gula Malacca",
      unitPrice: 19.45,
      stockLevel: 27,
    });
    await Product.create({
      name: "Rogede sild",
      unitPrice: 9.5,
      stockLevel: 5,
    });
    await Product.create({
      name: "Spegesild",
      unitPrice: 12.0,
      stockLevel: 95,
    });
    await Product.create({
      name: "Zaanse koeken",
      unitPrice: 9.5,
      stockLevel: 36,
    });
    await Product.create({
      name: "Chocolade",
      unitPrice: 12.75,
      stockLevel: 15,
    });
    await Product.create({ 
      name: "Maxilaku", 
      unitPrice: 20.0, 
      stockLevel: 10 
    });
    await Product.create({
      name: "Valkoinen suklaa",
      unitPrice: 16.25,
      stockLevel: 65,
    });
    await Product.create({
      name: "Manjimup Dried Apples",
      unitPrice: 53.0,
      stockLevel: 20,
    });
    await Product.create({ 
      name: "Filo Mix", 
      unitPrice: 7.0, 
      stockLevel: 38 
    });
    await Product.create({
      name: "Perth Pasties",
      unitPrice: 32.8,
      stockLevel: 0,
    });
    await Product.create({
      name: "Tourtière",
      unitPrice: 7.45,
      stockLevel: 21,
    });
    await Product.create({
      name: "Pâté chinois",
      unitPrice: 24.0,
      stockLevel: 115,
    });
    await Product.create({
      name: "Gnocchi di nonna Alice",
      unitPrice: 38.0,
      stockLevel: 21,
    });
    await Product.create({
      name: "Ravioli Angelo",
      unitPrice: 19.5,
      stockLevel: 36,
    });
    await Product.create({
      name: "Escargots de Bourgogne",
      unitPrice: 13.25,
      stockLevel: 62,
    });
    await Product.create({
      name: "Raclette Courdavault",
      unitPrice: 55.0,
      stockLevel: 79,
    });
    await Product.create({
      name: "Camembert Pierrot",
      unitPrice: 34.0,
      stockLevel: 19,
    });
    await Product.create({
      name: "Sirop drable",
      unitPrice: 28.5,
      stockLevel: 113,
    });
    await Product.create({
      name: "Tarte au sucre",
      unitPrice: 49.3,
      stockLevel: 17,
    });
    await Product.create({
      name: "Vegie-spread",
      unitPrice: 43.9,
      stockLevel: 24,
    });
    await Product.create({
      name: "Wimmers gute Semmelknödel",
      unitPrice: 33.25,
      stockLevel: 22,
    });
    await Product.create({
      name: "Louisiana Fiery Hot Pepper Sauce",
      unitPrice: 21.05,
      stockLevel: 76,
    });
    await Product.create({
      name: "Louisiana Hot Spiced Okra",
      unitPrice: 17.0,
      stockLevel: 4,
    });
    await Product.create({
      name: "Laughing Lumberjack Lager",
      unitPrice: 14.0,
      stockLevel: 52,
    });
    await Product.create({
      name: "Scottish Longbreads",
      unitPrice: 12.5,
      stockLevel: 6,
    });
    await Product.create({
      name: "Gudbrandsdalsost",
      unitPrice: 36.0,
      stockLevel: 26,
    });
    await Product.create({
      name: "Outback Lager",
      unitPrice: 15.0,
      stockLevel: 15,
    });
    await Product.create({
      name: "Flotemysost",
      unitPrice: 21.5,
      stockLevel: 26,
    });
    await Product.create({
      name: "Mozzarella di Giovanni",
      unitPrice: 34.8,
      stockLevel: 14,
    });
    await Product.create({
      name: "Röd Kaviar",
      unitPrice: 15.0,
      stockLevel: 101,
    });
    await Product.create({
      name: "Longlife Tofu",
      unitPrice: 10.0,
      stockLevel: 4,
    });
    await Product.create({
      name: "Rhönbräu Klosterbier",
      unitPrice: 7.75,
      stockLevel: 125,
    });
    await Product.create({
      name: "Lakkalikööri",
      unitPrice: 18.0,
      stockLevel: 57,
    });
    await Product.create({
      name: "Original Frankfurter grüne Soße",
      unitPrice: 13.0,
      stockLevel: 32,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
