let guestList : string[] = ["Nasir","Dua","Junaid"];
// prinit the name who is not invited for dinner
let unableAttend: string = guestList.splice(1,1)[0];
console.log(`${unableAttend} is not invited for dinner.`);
//push
guestList.push("Asma");
//print a message
guestList.forEach(guest =>{
    console.log(`Dear ${guest}, you are invited to dinner.`);
    
})