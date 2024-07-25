let guestList: string[] = ["Nasir","Ali","Junaid","Dua","Asma","Ahmed"];
//print message
console.log("Unfortunately! the new dinner table will not arrive so we can invite only two guests. ");
// Remove guest from the list
while(guestList.length > 2){
    let removeGuest : string | undefined = guestList.pop();// undefined used because we don't know from guestlist which elements will be removed
    if (removeGuest !== undefined) {
        console.log((`Sorry ${removeGuest}, we can't invite you.`));
    }
}
//print a message to each of the two people still on your list,
//letting them know they are still invited
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited.`);
})
// remove last two names from the list
guestList.splice(0, guestList.length)
// print updated empty list
console.log("Updated list of guest:", guestList);
