   
   
var text="welcomepython"
 
text=text.split('')
var start=0
var end=text.length-1

var vowels="aeiou"

while(start<end){
    
    if(vowels.includes(text[start]) && vowels.includes(text[end])){

        [text[start],text[end]]=[text[end],text[start]]
        start++;
        end--;

    }
    else if(!vowels.includes(text[start])){

        start++;
    }

    else if(!vowels.includes(text[end])){
        end--;
    }

}

console.log(text.join(''));