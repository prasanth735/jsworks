//   data types>> number,string,boolien,undifined,null

// collection []>array,{"":""} object


var cources=['fullstack','testing','ui']


// fetch elements by using index number
console.log(cources[1]) 

// check index number of element
console.log(cources.indexOf('ui'))

// add two  arrays
console.log(cources.concat(['ux','backend']))

// remove the element from array and return the element 
console.log(cources.pop())

// add an element to the array into last position
cources.push('frontend')
console.log(cources)


// remove the lement form array from first index and return it
cources.shift()
console.log(cources)

// check the element is inthe array
console.log(cources.includes('testing'))


// convert array to  string
console.log(cources.toString())



// ==============================================================================================


var name='pythhon'
var duration='6month'
var cource='fullstack'

var array=[
    name,duration,cource
]

console.log(array)
// [ 'pythhon', '6month', 'fullstack' ]
