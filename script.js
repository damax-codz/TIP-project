var i=1
    
function add(){
document.getElementById("count").innerHTML="$" + i++
}
function minus(){
   if(i<=0){
       alert("E funny abi 😏 add money joor")
       return i=0
   } 
   return  i-=1
}
