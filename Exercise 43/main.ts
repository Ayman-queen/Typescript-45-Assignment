function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name)
    );
}
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`)
}
let magicians_names = ["Nasir","Ali","Junaid"];
let copy_magicians_names = magicians_names.slice()
let copy_great_magicians = make_great(copy_magicians_names)
console.log("Original Array\n");
show_magicians(magicians_names)
console.log("Copied Array\n");
show_magicians(copy_great_magicians)