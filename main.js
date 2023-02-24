var submit = document.querySelector(".claim-btn");
var firstName = document.querySelector('.firstname');
var lastName = document.querySelector('.lastname');
var email = document.querySelector('.email');
var password = document.querySelector('.password');

submit.addEventListener('click', ()=>{
  if (firstName.value === ''){
    document.querySelector('.error-msg1').style.display = 'block';
    firstName.style.border = "3px solid #FF7979";
    firstName.classList.add('failed');
  }
  else{
    document.querySelector('.error-msg1').style.display = 'none';
    firstName.classList.remove('failed');
    firstName.style.border = "1px solid rgb(224, 214, 214)";
  }
})

submit.addEventListener('click', ()=>{
  if (lastName.value === ''){
    document.querySelector('.error-msg2').style.display = 'block';
    lastName.style.border = "3px solid #FF7979";
    lastName.classList.add('failed');
  }
  else{
    document.querySelector('.error-msg2').style.display = 'none';
    lastName.classList.remove('failed');
    lastName.style.border = "1px solid rgb(224, 214, 214)";
  }
})

submit.addEventListener('click', ()=>{
  if (email.value === ''){
    document.querySelector('.error-msg3').style.display = 'block';
    email.style.border = "3px solid #FF7979";
    email.classList.add('failed');
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    email.value.match(mailformat);
  }
  else{
    document.querySelector('.error-msg3').style.display = 'none';
    email.classList.remove('failed');
    email.style.border = "1px solid rgb(224, 214, 214)";
  }
})

submit.addEventListener('click', ()=>{
  if (password.value === ''){
    document.querySelector('.error-msg4').style.display = 'block';
    password.style.border = "3px solid #FF7979";
    password.classList.add('failed');
  }
  else{
    document.querySelector('.error-msg4').style.display = 'none';
    password.classList.remove('failed');
    password.style.border = "1px solid rgb(224, 214, 214)";
  }
})
