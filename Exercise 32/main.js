var current_users = ["Nasir", "Ali", "Asim", "Junaid", "Dua"];
var new_users = ["Nasir", "Ahmed", "Junaid", "Bilal", "jamila"];
new_users.forEach(function (new_one_User) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_User.toLocaleLowerCase(); });
    if (our_condition) {
        console.log("sorry ".concat(new_one_User, ", is already taken!"));
    }
    else {
        console.log("This Username".concat(new_one_User, " is available"));
    }
});
