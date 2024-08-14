
// step 1 ------------------------------

const library = [
    
    {
        title : "Book Title 1",
        author : "Shiran",
        status : {
            own : true,
            reading : false,
            read : false,
        }
    },
    {
        title : "Book Title 2",
        author : "Shiran",
        status : {
            own : true,
            reading : false,
            read : false,
        }
    },
    {
        title : "Book Title 3",
        author : "Shiran",
        status : {
            own : true,
            reading : false,
            read : false,
        }
    }

]

/// step 2 ------------------------------


library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;


// step 3 --------------------------------

// Rename title To firstBook //
const {title : firstBook} = library[0];

//console.log(firstBook);




// step 4 --------------------------------

// convert To Json -----------------------

const libraryJson = JSON.stringify(library)


console.log(libraryJson);

//convert JSON In to Object --------------

const obj = JSON.parse(libraryJson);
console.log(obj);
