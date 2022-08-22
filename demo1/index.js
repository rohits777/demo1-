function validate(){

var schoolname= document.getElementById("sch");
var email= document.getElementById("mail");
var name= document.getElementById("name");
var nickname= document.getElementById("nicname");
var contact= document.getElementById("number");

if(schoolname.length >=8){
    true;
}
else{
    
    alert("invalid input");
    return false;

}
if(email.includes('@gmail')){
    true;
}else{
    alert('invalid email');
    return false;
    
}
if(name.length>=2){
    true;
}else{
    alert("taye valid name");
    return false;
}
if(nickname == ""){
    alert("no blank values are alloed");
    return false;
}
else{
    true;
}
if(contact >=10 ){
    true;
}else{
    alert("enter valid contact number");
    return false;
}

}

