n=parseInt(process.argv[2])
s=parseInt(process.argv[3])
let rem=0 
for(let i=1; i<=s; i++){
    rem=n%10
    console.log(rem)
    n=Math.floor(n/10) 
}
