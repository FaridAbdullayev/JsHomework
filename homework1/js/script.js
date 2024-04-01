

let email = document.getElementById("exampleInputEmail1");


// let sign=  document.getElementsByClassName("sign-up")


let emailIsValid = true;
let password = true;

document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    emailIsValid = checkEmail();
    password = checkPassword();
    if(checkEmail()==true && checkPassword() ==true){
        let messageDiv = createMessage("Hazirdi 👍");
        document.querySelector(".box2").appendChild(messageDiv);
    }



})

function createErrorSpan(message) {
    let span = document.createElement("span");
    span.innerText = message;
    span.style.color = "red";
    return span;
}


let checkEmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;;

function checkEmail() {
    email.parentElement.querySelectorAll("span").forEach(elem => {
        elem.remove();
    })

    let check = true;
    if (email.value.length < 3) {
        let span = createErrorSpan("Email 3 beraber ve ya boyuk olmalidir ")
        email.parentElement.appendChild(span);
        check = false;
    }
    if (email.value.length > 20) {
        let span = createErrorSpan("Email 20 beraber ve ya kicik olmalidir")
        email.parentElement.appendChild(span);
        check = false;
    }
    if (!checkEmailRegex.test(email.value)) {
        let span = createErrorSpan("Duzgun email qeyd edin")
        email.parentElement.appendChild(span);
        check = false;
    }
    return check;
}


email.addEventListener("input", function () {
    if (!emailIsValid) {
        checkEmail();
    }
})




let password1 = document.getElementById("exampleInputPassword1");

let password2 = document.getElementById("exampleInputPassword2");

password2.addEventListener("input", function () {
    if (!password) {
        checkPassword();
    }
})

password1.addEventListener("input", function () {
    if (!password) {
        checkPassword();
    }
})




function checkPassword() {
    password2.parentElement.querySelectorAll("span").forEach(elem => {
        elem.remove();
    })

    password1.parentElement.querySelectorAll("span").forEach(elem => {
        elem.remove();
    })
    let check = true;
    if (password1.value !== password2.value) {
        let span = createErrorSpan("Password ve Confirim Pasword beraber olmaldiir")
        password2.parentElement.appendChild(span);
        check = false;
    }
    
    if (!/^\d+$/.test(password1.value)) {
        let span = createErrorSpan("Reqmelerden ibaret olmalidir")
        password1.parentElement.appendChild(span);
        check = false;
      }
    return check;
}



function createMessage(message) {
    let div = document.createElement("div");
    div.textContent = message;
    div.style.position = "absolute"
    div.style.color = "green";
    div.style.width = "200px";
    div.style.height = "80px";
    div.style.backgroundColor = "white"
    div.style.marginLeft = "60%"
    div.style.border = "solid 2px black"
    div.style.display = "flex"
    div.style.justifyContent = "center"
    div.style.alignItems = "center"
    div.style.fontSize = "20px"
    setTimeout(function () {
        div.remove();
    }, 5000)
    return div;
}


