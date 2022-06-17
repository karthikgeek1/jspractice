n=parseInt(process.argv[2])
let rem=0 
 i=1
 while(n!=0){
    rem=n%10
    console.log(rem)
    n=Math.floor(n/10) 
}