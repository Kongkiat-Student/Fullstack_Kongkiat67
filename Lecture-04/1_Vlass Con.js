class Song{
    constructor(title, artist){
        this.title = title;
        this.artist = artist;
    }
}

const mySong = new Song("Bohemian Rhapsody", "John Queen");
console.log(mySong.title);  // Output: Bohemian Rhapsody