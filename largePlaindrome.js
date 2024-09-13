

var text="racecar"


var result=""
for (i=0;i<text.length;i++){

    let r=i
    let l=i
    while(l>=0 && r<text.length && text[r]==text[l]){

        currentPalindrome=text.substring(l,r+1)
        if (result.length <currentPalindrome.length){
            result=currentPalindrome
        }
        r++
        l--
    }

}

console.log(result);


