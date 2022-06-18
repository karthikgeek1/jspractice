n=parseInt(process.argv[2])
let f=0
let i=1
while(i<=n){
    if(n%i==0){
        f=f+1
    }
    i++
}
if (f==2){
    console.log("Prime")
}
else{
    console.log("composite")
}