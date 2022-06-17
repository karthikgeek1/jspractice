n=parseInt(process.argv[2])
a=1
b=1
c=0
for(let i=1; i<=n; i++){
  console.log(a)
  c=a+b
  a=b 
  b=c 
}