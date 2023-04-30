const inputField = document.getElementById("inputfield");
const eyeBtn = document.getElementById("eyebtn");
const password = document.getElementById("password");

const inputbox = document.getElementById("inputbox");

const length = document.getElementById("length");
const number = document.getElementById("number");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const special = document.getElementById("special");

// hide / unhide password 

eyeBtn.addEventListener("click", ()=>{
    if(inputField.type === "password"){
        inputField.type = "text";
        eyeBtn.style.color = "#f74";
    }else{
        inputField.type = "password";
        eyeBtn.style.color = "black";        
    }  
});

// open  password policies

inputbox.onclick = ()=>{
    password.style.display = "block";
}


// Accepting password policies 
 

inputField.addEventListener("keyup",()=>{
        let text = inputField.value;
    if(text.length>=8){
        length.classList.add("valid");
    }else{
        length.classList.remove("valid");
    }


    let numbers = /[0-9]/g;
    if(text.match(numbers)){
        number.classList.add("valid");
    }else{
        number.classList.remove("valid");
    }


    let low = /[a-z]/g;
    if(text.match(low)){
        lower.classList.add("valid");
    }else{
        lower.classList.remove("valid");
    }

    let upp = /[A-Z]/g;
    if(text.match(upp)){
        upper.classList.add("valid");
    }else{
        upper.classList.remove("valid");
    }


    let spe = /[!@#$%^&*]/g;
    if(text.match(spe)){
        special.classList.add("valid");
    }else{
        special.classList.remove("valid");
    }

})

