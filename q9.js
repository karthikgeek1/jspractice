let rev = 0;
let num = parseInt(process.argv[2]);
let lastDigit;
let t=num 

while(num != 0){
	lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num/10);
}
if(rev==t){
    console.log("yes")
}
else{
    console.log("no")
}