

function putFocus(field) {
    document.getElementById(field).innerHTML = "";
}

function checkName(field) {
    console.log(field.id+" "+field.value);
    if (field.value == "") {
        var spanId = "vali" + field.id;
        document.getElementById(spanId).innerHTML = field.name + " cant be empty";
        
    }
}

function confEmail(cemail) {
    if(cemail.value == ""){
    document.getElementById("val" + cemail.id).innerHTML = "please confirm your email";
    cemail.focus();
    
} else {
    var email = document.getElementById('email').value;
    if (!(cemail.value == email)) {
        document.getElementById("val" + cemail.id).innerHTML = "emails must match";
        cemail.focus();
        
    } else {
        document.getElementById("val" + cemail.id).innerHTML = "";
            }
}

}

function validateEmail(email) {
    var spanId = "vali" + email.id;
    if (email.value == "") {
        document.getElementById(spanId).innerHTML = email.name + " cant be empty";
        email.focus();
    } else {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email.value)) {
            document.getElementById(spanId).innerHTML = "";
        } else {
            document.getElementById(spanId).innerHTML = "enter a valid email";
            email.value = "";
            email.focus();
        }
    }
}

function checkPhone(phone){
    var spanId = document.getElementById('val' + phone.id);
    if(isNaN(phone.value)){
        console.log("entered here" + spanId.id);
        spanId.innerHTML = "In " + phone.name + " field only numbers are allowed";
        phone.focus();
    } else {
        if(phone.value == "")
        {
            spanId.innerHTML = phone.name + " cant be empty";
            phone.focus();
        } else {
            if(phone.value.length > 10 || phone.value.length < 10){
            spanId.innerHTML = "phone number must contains 10 digits only";
            phone.focus();
            } else {
                spanId.innerHTML = "";
            }
        }
    }

}

function checkForm(form) {
    var elements = form.elements;
    if(elements.fName.value != "" 
        && elements.lName.value != ""
         && elements.email.value == elements.cEmail.value
          && !isNaN(elements.Phone.value)
           && elements.Phone.value.length == 10){
        return true;
    } else{
        alert("Kindly check all the fields");
        return false;
    }
}

