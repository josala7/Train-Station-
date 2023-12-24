
// to open page by id 
function overlay(id){
  document.getElementById(id).style.display='block'; 
}
// to close page by id 

function closeoverlay(id){
document.getElementById(id).style.display='none';
}

// date
function showdate(){
  today = new Date();
  alert( "Todays date is " +  today);
}


// =============================== validation ===============================
function Validate_signinform() {


  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;


  //  email validation 
  if (email === "" ) {
    document.getElementById('emailError').innerText = ' Email address is required';
    return false;
    } else if(email.indexOf('@') === -1){
      document.getElementById('emailError').innerText = 'Invalid email address';
      return false;

  } else {
  document.getElementById('emailError').innerText = '';

  }

  //  password validation 
  if (!password) {
    document.getElementById('passwordError').innerText = 'Password is required';
    return false;
    } else if( password.length < 6){
      document.getElementById('passwordError').innerText = 'Password must be at least 6 characters';
      return false;

  } else {
    document.getElementById('passwordError').innerText = '';
  }





  // If all validations pass, allow form submission
  closeoverlay('beforesignin');
  closeoverlay('inoverlay');
  overlay('aftersignin');
  alert('signed in successfully');
  return true;
  
  
}



function Validate_signupform(){

var firstname = document.getElementById('firstname').value;
var secondname = document.getElementById('secondname').value;
var email2 = document.getElementById('email2').value;
var password2 = document.getElementById('password2').value;
var confirmPassword = document.getElementById('confirmPassword').value;


 //validation on firstname
 if (firstname === "") {

  document.getElementById('firstnameError').innerText = 'First name is required';
  return false;
} else {
  document.getElementById('firstnameError').innerText = '';
}
//validation on secondname
if (secondname === "") {

  document.getElementById('secondnameError').innerText = 'Last name is required';
  return false;
} else {
  document.getElementById('secondnameError').innerText = '';
}
  //  email validation 
  if (email2 === "") {
    document.getElementById('emailError2').innerText = ' Email address is required';
    return false;
    } else if(email2.indexOf('@') === -1){
      document.getElementById('emailError2').innerText = 'Invalid email address';
      return false;
  } else {
  document.getElementById('emailError2').innerText = '';

  }

  //  password validation 
  if (!password2) {
    document.getElementById('passwordError2').innerText = 'Password is required';
    return false;
    } else if( password2.length < 6){
      document.getElementById('passwordError2').innerText = 'Password must be at least 6 characters';
      return false;

  } else {
    document.getElementById('passwordError2').innerText = '';
  }


//validation on confirmPassword
if (confirmPassword === "") {

  document.getElementById('confirmPasswordError').innerText = 'confirm Password is required';
  return false;
} 
else if( confirmPassword !== password2){
  document.getElementById('confirmPasswordError').innerText = 'Not match ';
  return false;

} 
else {
  document.getElementById('confirmPasswordError').innerText = '';
}




  // If all validations pass, allow form submission
  closeoverlay('upoverlay');
  overlay('inoverlay');

  return true;


}

function ValidateBook(){
  var placename = document.getElementById('placename').value;
  var date = document.getElementById('date').value;
  var tickets = document.getElementById('tickets').value;

//validation on placename
if (placename === "") {

  document.getElementById('placenameError').innerText = 'placename is required';
  return false;
} else {
  document.getElementById('placenameError').innerText = '';
}
//validation on date
if (!date) {

  document.getElementById('DateError').innerText = 'Date is required';
  return false;
} else {
  document.getElementById('DateError').innerText = '';
}
//validation on tickets
if (tickets ==="") {

  document.getElementById('TicketError').innerText = 'ticket is required';
  return false;
} else {
  document.getElementById('TicketError').innerText = '';
}
 // If all validations pass, allow form submission
document.getElementById('findtable').style.display='block'; 
return true;

  
}