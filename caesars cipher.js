function caesars(str) {
let result="";
let alphas1="ABCDEFGHIJKLM !@#$%^&*().,<>_-=+-;'[]{}|\/?"
let alphaset1=alphas1.split("")
let alphas2="NOPQRSTUVWXYZ !@#$%^&*().,<>_-=+-;'[]{}|\/?"
let alphaset2=alphas2.split("")

for(let i=0;i<str.length;i++){
if(alphaset1.indexOf(str[i])>=0){
result+=alphaset2[alphaset1.indexOf(str[i])]
}
else if(alphaset2.indexOf(str[i])>=0){
result+=alphaset1[alphaset2.indexOf(str[i])]
}
}
  return result;
}

