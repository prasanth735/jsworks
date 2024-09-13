

var a=4,is_prime=true


for(let i=2;i<a;i++){
    if(a%i==0){
        is_prime=false
        break
    }
}
console.log(is_prime)
