

var sourceWord="chicken"

var targetWord="hen"


// var wc={}

// sourceWord.split("").map(ch=> ch in wc? wc[ch]+=1:wc[ch]=1)

// // console.log(wc)



// iskangarooword=true

// for(let ch of targetWord){

//     if(ch in wc && wc[ch]>0){

//         wc[ch]-=1
//     }
//     else{

//         iskangarooword=false
//         break
//     }
// }

// console.log(iskangarooword? "kangarooword":"not kangarooword");




var worddd=sourceWord.split("")

console.log(worddd);

var iskangarooword=true

for (let ch of sourceWord){

    if (ch in worddd){

        worddd.pop(ch)
    }
    else{
        iskangarooword=false
        break

    }
}

console.log(iskangarooword);