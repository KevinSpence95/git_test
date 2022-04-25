//Maps are designed specifically with the functionality of being a dictionary/lookup table 
//they are optimized for frequent addition/removal of key/value pairs. 
//Objects are the other hand are not optimized for frequent additions/removals of key/value pairs so a Map will be more performant if you are adding/removing a lot of key/value pairs.

const emptyMap = new Map(); //create an empty map


const myMap = new Map([ //to populate a Map, pass it an array of arrays with a ['key', 'value'] pair
['key',8],
[405, 'value'] //maps can have any type for the keys unlike objects
]);

myMap.set({height: 80},100); //add entries to the map with set
myMap.set(false, [2,5,7]) 
myMap.set(1, 'num');

//check if a key exists
console.log(myMap.has(1)); //true
console.log(myMap.has('1')); //false

//get the value at a specific key
myMap.get({height: 80}) //100
myMap.get("not a key"); //undefined


console.log(`Map Size: ${myMap.size}`);
console.log(myMap.keys()); //.keys() returns a Map Key iterator
console.log(myMap.entries()); //.entries() returns an array of arrays with the entries
console.log(myMap); 

console.log("ITERATING WITH FOREACH")
myMap.forEach((val, key) => {
    console.log(`Key: ${key} Value: ${val}`)
});
console.log("ITERATING WITH for...of")
for(const entry of myMap) {
    console.log(entry);
}

myMap.delete(false); //only deletes the entry with the false key
console.log(myMap);

myMap.clear(); //clears all entries
console.log(myMap);



