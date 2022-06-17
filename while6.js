n=parseInt(process.argv[2])
a=1
b=1
c=0
let i=1
while(i<=n){
  console.log(a)
  c=a+b
  a=b 
  b=c 
  i++
}