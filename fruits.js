

var fruits={
    "apple":256,
    "mango":50,
    "orange":99,
    "banana":70
}



var data=Object.entries(fruits)

data.sort((o1,o2)=> o2[1]-o1[1])
console.log(data[0])