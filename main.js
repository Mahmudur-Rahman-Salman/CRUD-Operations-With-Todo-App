let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textArea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

// form validations
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
    if(textInput.value === ''){
        console.log('failure');
        msg.innerHTML = "Task input box cannot be empty"; 
    }
    else{
        console.log('success'); 
        msg.innerHTML = ""; 
    }
}
 