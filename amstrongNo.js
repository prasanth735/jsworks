
var num=370

var ogNum=num
var len=String(num).length
var sum=0

while(num!=0){
    let digit=num%10
    let res=digit**len
    sum+=res
    num=Math.floor(num/10)
}

console.log(sum)

ans=sum==ogNum? "amstrong": "not amstrong"
console.log(ans)
