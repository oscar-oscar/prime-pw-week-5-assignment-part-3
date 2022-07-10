console.log('***** Music Collection *****')


// //show collection part 2 kyle's question
// //he's outputting via template literal vs longform string concatenation

// //find by artist is mjuch like carrot example in review session

// //show collection part
// // use for loop 
// // pass function using argument not the global
// //
// //  for (let i = 0; i < music.length; i++)
// //     let album = music[i];
// //     console.log(album.title) // i will alway be index
// //  // or use for of loop variable will always be 

// //Create a variable `collection` that starts as an empty array.


let collection = [];
console.log['', collection];

// const pearlJam = {
//     title: 'No Code',
//     artist: 'Pearl Jam',
//     yearPublished: '1996',
     
// };

// collection.push(pearlJam);

function addToCollection(title, artist, yearPublished){
    console.log('in addToCollection', title, artist, yearPublished)

    const newRecord = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }
    collection.push(newRecord)
    return newRecord;
};
console.log(addToCollection('No Code', 'Pearl Jam', 1996));
console.log(addToCollection('Soul Power', 'Curtis Harding', 2014));



