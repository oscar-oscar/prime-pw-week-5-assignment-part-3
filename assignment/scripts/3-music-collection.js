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
console.log(addToCollection('Let My People Go', 'Darondo', 2005));
console.log(addToCollection('Stink EP', 'The Replacements', 1982));
console.log(addToCollection('Mezzanine', 'Massive Attack', 1998));
console.log(addToCollection('Vaudeville Villain', 'Viktor Vaughn', 2003));


console.log(collection);
console.table(collection);

/**
 * function that is reused to show any collection and takes in an array as a parameter
 * @param {*} collection 
 * @returns 
 */

function showCollection(collection){
    for( i = 0; i < collection.length; i+=1){
        // console.log('Number of albums:', collection.length);

       if(collection[i]){
           // console.log(`${collection[i].title}`);//using template literal
           console.log(collection[i].title + " " + 'by' + collection[i].artist + " " + 'in' + " " + collection[i].yearPublished);
       }
       

    }return collection
    
}
console.log('Number of albums:', collection.length);
showCollection(collection);




