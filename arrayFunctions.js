console.time()

let nums = [4,8,2,0,3,9]

let [first,,,fourth] = nums; //array destructuring
console.log(first); //4
console.log(fourth); //0

let copyNums = [...nums] //spread operator

copyNums.push(100); //push on to the end
console.log(copyNums);

let lastElement = copyNums.pop(); //pop off of the end
console.log(lastElement)
console.log(copyNums);

let firstElement = copyNums.shift(); // shift off of the beginning
console.log(firstElement);
console.log(copyNums);

copyNums.unshift(firstElement); //unshift onto the beginning
console.log(copyNums);

console.timeEnd();