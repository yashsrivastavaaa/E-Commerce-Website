function test(){
    var use = document.querySelector('#user').value;
    var passwor = document.querySelector('#pas').value;
    if (passwor == '1234' && use == 'yash')
    {
        window.open(
        "seller.html", 
        "_self"
    );
    alert("Login Successful, Welcome to Seller Panel")
    }

    else{
        alert("Wrong Username or Password");
    }
}