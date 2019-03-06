const path = require("path");
const fs = require("fs");

const productPath = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = callback => {
  fs.readFile(productPath, (err, content) => {
    if (err) return callback([]);
    return callback(JSON.parse(content));
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }
  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(productPath, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }
  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
};
