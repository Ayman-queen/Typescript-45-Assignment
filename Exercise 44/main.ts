function makeSandwich(...items: string[]) {
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(singleItem =>
        console.log(singleItem)   
    )
    console.log("\nNow Enjoy Sandwich");  
}
makeSandwich("Bread","Butter")
makeSandwich("Chicken","Egg","Cheese")
makeSandwich("Chicken","Egg","Cheese","Bread","Butter","Tomato","Mayo")