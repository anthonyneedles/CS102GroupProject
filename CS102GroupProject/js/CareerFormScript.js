function formValid(){
    
    if(document.forms[0].name.value == "")
    {
        alert('Please enter your name!');
        return false;
    }

    if(document.forms[0].email.value == "")
    {
        alert('Please enter your email!');
        return false;
    }

    if(document.forms[0].phone.value == "")
    {
        alert('Please enter your phone number!');
        return false;
    }

    if(document.forms[0].file.value == "")
    {
        alert('Please upload your resume!');
        return false;
    }
    
    alert('Your application has been sent! Good luck!');
    return true;
}
