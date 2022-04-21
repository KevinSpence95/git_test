const personOne =  {
	name: 'Kyle',
	age:24,
    favoriteFood: 'Watermelon',
	address: {
		city: 'Somwhere',
		state: 'One of them'
	}
}

const personTwo = {
	name: 'Sally',
	age:32,
	address: {
		city: 'Somewhere else',
		state: 'Another one of them'
	}
}

const personThree = {...personOne, ...personTwo} //take everything in personOne and put it in the new object and take everything in personTwo and put it in the new object, but overwrite anything that was already in personOne 

console.log(personThree);