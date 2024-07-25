var guestList = ["Dua", "Junaid", "Nasir"];
console.log("Great news! we found a bigger table.");
//unshift()
guestList.unshift("Feroze");
console.log(guestList);
//Add one new guest in middle of Array
//splice()
guestList.splice(Math.floor(guestList.length / 2), 0, "Ali");
console.log(guestList);
//push()
guestList.push("Asma");
console.log(guestList);
//forEach()
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you all are invited to dinner"));
});
