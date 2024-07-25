function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Nasir", "Album title 1");
console.log(album1);
var album2 = make_album("Junaid", "Album title 2");
console.log(album2);
var album3 = make_album("Dua", "Album title 3", 20);
console.log(album3);
