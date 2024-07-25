function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleItem) {
        return console.log(singleItem);
    });
    console.log("\nNow Enjoy Sandwich");
}
makeSandwich("Bread", "Butter");
makeSandwich("Chicken", "Egg", "Cheese");
makeSandwich("Chicken", "Egg", "Cheese", "Bread", "Butter", "Tomato", "Mayo");
