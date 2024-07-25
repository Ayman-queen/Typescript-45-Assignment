let guestList: string[]=["Dua","Junaid","Nasir"];
console.log("Great news! we found a bigger table.");
//unshift()
guestList.unshift("Feroze");
console.log(guestList);
//Add one new guest in middle of Array
//splice()
guestList.splice(Math.floor(guestList.length/2),0, "Ali");
console.log(guestList);
//push()
guestList.push("Asma");
console.log(guestList);
//forEach() : This method help to send one message to each guest we dont need to tell each of them separately
guestList.forEach(guest =>{
    console.log(`Dear ${guest}, you all are invited to dinner`);
})