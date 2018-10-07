document.getElementById('name').addEventListener('blur',checkName);
document.getElementById('zip').addEventListener('blur',checkZip);
document.getElementById('email').addEventListener('blur',checkEmail);
document.getElementById('phone').addEventListener('blur',checkPhone);

function checkName(){
   
    const name = document.getElementById('name');
    const re = /^([a-zA-Z]\s?){2,18}$/;
    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    }
    else{
      name.classList.remove('is-invalid')
    }
}

function checkZip(){
    const zip = document.getElementById('zip');
    //for the first [0-9] numbers are placed into the zip and then [. \ -] one of the should be placed into the zip and then it is followed by the three numbers
    const re = /^[0-9]{5}([\-.][0-9]{3})?$/;
    if(!re.test(zip.value)){
        zip.classList.add('is-invalid');

    }
    else{
      zip.classList.remove('is-invalid')
    }
}

function checkEmail(){
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_ \ .]+)\@([a-z]+)\.[a-z]{2,5}$/;
    if(!re.test(email.value)){
        email.classList.add('is-invalid');

    }
    else{
      email.classList.remove('is-invalid')
    }
}

function checkPhone(){
    const phone = document.getElementById('phone');
    const re = /^\(?\d{3}\)?[. -  ]?\d{3}[. -  ]?\d{4}$/;
    if(!re.test(phone.value)){
        phone.classList.add('is-invalid');

    }
    else{
      phone.classList.remove('is-invalid')
    }
}

document.getElementById('submitBtn').addEventListener('click',(e) => {
    const personName = document.getElementById('name').value;
let tasks;
if (localStorage.getItem('tasks')===null){
tasks=[];
}   else
            {
            tasks= JSON.parse(localStorage.getItem('tasks'));



            }

tasks.push(personName);
localStorage.setItem('tasks',JSON.stringify(tasks)) ;

e.preventDefault();
})



