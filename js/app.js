'use strict';

// let myform = document.getElementById("myform");
// console.log(myform);



function changestyle(obj,id) {
    let object = document.getElementById(obj);
    let value = document.getElementById(id);
    if(object.checked){
      value.style.textDecoration="line-through";
         }else{
      alert("Clear checked"); //when not checked
      value.style.textDecoration="none";
    }
    
}
