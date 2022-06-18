n=parseInt(process.argv[2])
if (n%3==0){
    console.log("Hello")
}
else if(n%5==0){
    console.log("World")
}
else if(n%15==0){
    console.log("HelloWorld")
}
else{
    console.log(n)
}
