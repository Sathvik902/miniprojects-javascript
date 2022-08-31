function validate(){
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('re_password').value;
 

    checkusername(username);
    // checkemail(email);
    // checkpassword(password);
    // checkpassmatch(cpassword);
}

function checkusername(username){
    if(username.length > 7){
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error','success');
        document.getElementById('username_error').innerHTML=''

    }
    else{
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText ="Enter a valid username"
    }
}

function checkemail(email){
    if(username.length > 7){
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error','success');
        document.getElementById('username_error').innerHTML=''

    }
    else{
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText ="Enter a valid username"
    }
}

function checkpassword(password){
    if(username.length > 7){
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('error','success');
        document.getElementById('password_error').innerHTML=''

    }
    else{
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerText ="Enter a valid username"
    }
}

function checkpassmatch(cpassword){
    if(username.length > 7){
        document.getElementById('cpassword').classList.add('success')
        document.getElementById('cpassword').classList.replace('error','success');
        document.getElementById('cpassword_error').innerHTML=''

    }
    else{
        document.getElementById('cpassword').classList.add('error')
        document.getElementById('cpassword_error').innerText ="Enter a valid username"
    }
}



