
// count  
// var words=["hello","hai","hello","hai"]

// var wc={}

// for(let w of words){

//     w in wc? wc[w]+=1: wc[w]=1
// }

// console.log(wc)


// words.map(w=> w in wc? wc[w]+=1:wc[w]=1)
// console.log(wc)


var scores=["6","6","4","4","2","2","1","4"]

var wc={}

scores.map(sc=> sc in wc? wc[sc]+=1:wc[sc]=1)

var total=scores.reduce((s1,s2)=>Number(s1)+Number(s2))

console.log(wc);
console.log(total);


//  freequent scores
var data=Object.entries(wc)

data.sort((o1,o2)=>o2[1]-o1[1])
console.log(data[0])