// object 

// var object={
//     property:"value",
//     property:"value"
// }

// // ==================================================== 

// var  student={

//     id:1,
//     name:"hari",
//     course:"python",

// }


// console.log(student.name)
// console.log(student.course)

// // add new property
// student.gender="male"

// console.log(student)


// // check attribute exist or not in object

// if("name" in student){
//     console.log("present")
// }
// else{
//     console.log("not present")
// }


// // =====================================   


var product={
    id:1,
    catregory:"electronics0",
    title:"usb",
    price:2000
}

console.log("price" in product? "exist":"not exist")

// add offer
product.price>2000?product.offer=200:product.offer=100
console.log(product)

// update price
"price" in product?product.price+=500:product.price=2500
console.log(product.price)



