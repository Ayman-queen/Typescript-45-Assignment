var guestList = ["Nasir", "Dua", "Junaid"];
// prinit the name who is not invited for dinner
var unableAttend = guestList.splice(1, 1)[0];
console.log("".concat(unableAttend, " is not invited for dinner."));
//push
guestList.push("Asma");
//print a message
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
});
