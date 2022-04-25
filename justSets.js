const emptySet = new Set(); //creates empty set named emptySet

const myNums = new Set([1,5,7,2,0,4,55]); //pass an iterable item to fill a set

console.log(myNums);
console.log(myNums.has(55));  //checks is myNums has 55  

console.log(myNums.add(10)); // the add method actually returns the Set object so you can chain .add().add()
console.log(myNums);


myNums.add(10).add(20).add(30); //this should add only 20 and 30 since sets can only contain unique items
console.log(myNums);

myNums.delete(55); //removes 55 from the set
console.log(myNums);

myNums.forEach((item)=>{ //iterate over items in a set easily with forEach
    console.log(item);
})

console.log(`# of Elements: ${myNums.size}`); //get number of elements in the set

myNums.clear(); //clear all elements from the set
console.log(myNums);


