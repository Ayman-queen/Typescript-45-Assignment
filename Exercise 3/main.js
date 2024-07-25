"use strict";
//store a person name ina variable and then print that person name  in lowecase,uppercase and titlecase
let personName = "aymen Shaheen";
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("Titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
