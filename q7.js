n=parseInt(process.argv[2])
let f=0
for(let i=1; i<=n; i++){
    if(n%i==0){
        f=f+1
    }
}
if (f==2){
    console.log("Prime")
}
else{
    console.log("composite")
}