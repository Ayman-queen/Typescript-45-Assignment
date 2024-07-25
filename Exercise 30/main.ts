let userNames = ["Nasir","Ali","Admin","Junaid","Dua"];

userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    } else {
        console.log(`hello ${oneUser}, thankyou for login in again.`); 
    }
})