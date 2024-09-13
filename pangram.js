

var text="The quick brown fox jumps over the lazy dog"

var alphabets="abcdefghijklmnopqrstuvwxyz"

// var isPangram=true

// for (let  ch of alphabets){

//     if(! text.includes(ch)){
//         isPangram=false
//         break 
//     }
// }

// console.log(isPangram? "pangram ":"not pangram");



             //split            //check aplhabets in text  
var pangram=alphabets.split("").map(ch=> text.includes(ch)).includes(false)  // check pangram array includes false value

console.log(pangram? "not pangram":"pangram");