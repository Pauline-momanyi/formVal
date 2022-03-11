$(document).ready(function(){

    $("#forms").submit(function(){
        //e.preventDefault();
        return formVal();
    })

    function formVal(){    
    var name = $("#username").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var conpass = $("#conpass").val();
    
    //validating name, non-empty
    var regex1 = /^[a-z A-Z]+$/
    if(name === ""){
        $("#userval").show();
        return false
    }else if (name.length < 3){
        $("#userval3").show();
        return false;
    }else if (!regex1.test(name)){
        $("#userval2").show();
        return false;
       }    

    //validating email , non-empty  
    var regex2 = /^([_\-\.%0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,7})?$/
    if(email === ""){
        $("#emailval").show();
        return false
    }else{       
       if (!regex2.test(email)){
        $("#emailval2").show();
        return false;
       }
    }

    //validating password, non-empty
    var regex3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#\._%()!])[a-zA-Z0-9@#\._%()!]+$/
    if(password === ""){
        $("#passval").show();
        return false
    }else if (!regex3.test(password)){
        $("#passval2").show();
        return false;
    }else if (password.length < 8 || password.length > 15){
        $("#passval3").show();
    }
    
    //validating password match and non-empty
    if(conpass === ""){
        $("#conpassval").show();
        return false
    }else if (conpass !== password){
        $("#conpassval2").show();
        return false;
    }else{
        alert ("successful");
    }
    return true;
    //alert ("successful");
    
    }
    

})

