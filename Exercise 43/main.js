function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_names = ["Nasir", "Ali", "Junaid"];
var copy_magicians_names = magicians_names.slice();
var copy_great_magicians = make_great(copy_magicians_names);
console.log("Original Array\n");
show_magicians(magicians_names);
console.log("Copied Array\n");
show_magicians(copy_great_magicians);
