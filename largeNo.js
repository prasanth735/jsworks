// var a=[10,2,25,63,4,8,99]

// var largNo=a[0]


// for(let i of a){
//     if(i>largNo){
//         largNo=i
//     }
// }

// console.log(largNo)




 var arr=[2,5,1,10,3,9]    //>>>>>>       //o/p=[10,3,9,2,5,1]


for (let i=1;i<=3;i++){
    let no=arr.pop()
    arr.unshift(no)
}

console.log(arr)



