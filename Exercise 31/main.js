var userNames = ["Nasir", "Ali", "Admin", "Junaid", "Dua"];
userNames = [];
if (userNames.length === 0) {
    console.log("we need to find some users!");
}
else {
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneUser, ", thankyou for login in again."));
        }
        ;
    });
}
