const decreasebtn= document.getElementById("minus");
const increasebtn= document.getElementById("plus");
const resetbtn= document.getElementById("reset");
const val = document.getElementById("display");
let value=0;

decreasebtn.onclick= function(){
    value--;
    val.textContent=value;
}
increasebtn.onclick= function(){
    value++;
    val.textContent=value;
}
resetbtn.onclick= function(){
    value=0;
    val.textContent=value;
}