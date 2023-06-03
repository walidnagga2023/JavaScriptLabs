// SCENARIO 1 START
let images = [
    {
        title:"Title",
        artist:"Artiste",
        date:"Date"
    },
    {
        title:"Mona Lisa",
        artist: "Leonardo Davinci",
        date:"1503"
    },
    {
        title:"The Last Supper",
        artist: "Leonardo Davinci",
        date:"1495"
    },
    {
        title:"Starry Night",
        artist: "Vincent van Gogh",
        date:"1889"
    },
    {
        title:"The Scream",
        artist: "Edvard Munch",
        date:"1893"
    },
    {
        title:"Guernica",
        artist: "Pablo Picasso",
        date:"1937"
    },
    {
        title:"The Kiss",
        artist: "Gustav Klimt",
        date:"1907"
    },
    {
        title:"Girl With a Pearl Earring",
        artist: "Johannes Vermeer",
        date:"1665"
    },
    {
        title:"The Birth of Venus",
        artist: "Sandro Botticelli",
        date:"1656"
    },
    {
        title:"Las Meninas",
        artist: "Diego Velázquez",
        date:"1503"
    },
    {
        title:"The Creation of Adam",
        artist: "Michelangelo",
        date:"1512"
    },
];

let specialChar = function(nbr, x){
    let s = x;
    do{
        s += x;
        nbr--;
    }while(nbr > 0);
    return s;  
    
}

for(let i = 1; i < images.length; i++){
    for(let j = 0; j < (28 - images[i].title.indexOf("  ")); j++){
        images[i].title += " ";
    }
    for(let j = 0; j < (28 - images[i].artist.indexOf("  ")); j++){
        images[i].artist += " ";
    }
}

    
// A CONSTRUCTOR
let Image = function(title, artist, date){
    this.title = title;
    this.artist = artist;
    this.date = date;
};


// A FACTORY
let getImage = function(title, artist, date){
        let _title = title;
        let _artist = artist;
        let _date = date;
        return{
            _title, 
            _artist, 
            _date
        };
    };
let images1 = [];
for(let i = 0; i<images.length; i++){
    images1[i] = new Image(images[i].title,images[i].artist, images[i].date); 
}

let images2 = [];
for(let i = 0; i < images1.length; i++){
    images2[i] = getImage(images1[i].title, images1[i].artist, images1[i].date);
    if(i==0){
        console.log(specialChar(72,'-'));
        console.log(specialChar(5,' ')+images2[i]._title +specialChar(23,' ')+ images2[i]._artist +specialChar(18,' ')+ images[i]._date);
        console.log(specialChar(72,'-'));
    }else{
        console.log(specialChar(2,' ')+images2[i]._title + images2[i]._artist + images2[i]._date);
        console.log(specialChar(72,'-'));
    }
    
}

