let current_users = ["Nasir","Ali","Asim","Junaid","Dua"];

let new_users = ["Nasir","Ahmed","Junaid","Bilal","jamila"];

new_users.forEach(new_one_User =>{
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_User.toLocaleLowerCase());
    if(our_condition){
        console.log(`sorry ${new_one_User}, is already taken!`);
    } else {
        console.log(`This Username${new_one_User} is available`); 
    }
})