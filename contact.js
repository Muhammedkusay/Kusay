// msg sent notification 
msgNot = document.querySelector(".msg-sent");

function sendMessage() {
    (function() {
        emailjs.init("R2dCDHA5MxaI0a5En");
    })();
    
    var serviceId = "service_69z2llc";
    var templateId = "template_g4scgii";
    
    var params = {
        username: document.querySelector("#username").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
    };
    
    // msg sent notification 
    if(formValid(params.username, params.email, params.message)) {
        emailjs.send(serviceId, templateId, params)
        .then(
            console.log("sent"),
        );
    
        document.querySelector("#username").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#message").value = "";
        
        msgNot.removeChild(msgNot.lastChild);
        msgNot.appendChild(document.createTextNode("Your Message Sent Successfully!"));
        msgNot.classList.remove("red");
        msgNot.classList.add("green");
        msgNot.classList.add("active");
        removeMsg();

    }

}
   
// message validation

function formValid(name, email, message) {

    let emailRegEx = /\w+@\w+.\w+/ig;
    mailValid = emailRegEx.test(email);

    if(name === "") {
        msgNot.removeChild(msgNot.lastChild);
        msgNot.appendChild(document.createTextNode("Username Field Is Empty!"));
        msgNot.classList.add("red");
        msgNot.classList.add("active");
        removeMsg();
    }

    else if(!mailValid) {
        msgNot.removeChild(msgNot.lastChild);
        msgNot.appendChild(document.createTextNode("Invalid Email!"));
        msgNot.classList.add("red");
        msgNot.classList.add("active");
        removeMsg();
    } 
    
    else if(message === "") {
        msgNot.removeChild(msgNot.lastChild);
        msgNot.appendChild(document.createTextNode("Message Field Is Empty!"));
        msgNot.classList.add("red");
        msgNot.classList.add("active");
        removeMsg();
    }
    
    else
        return true; 
    
}

// msg timer
function removeMsg() {
    setTimeout(() => {
        msgNot.classList.remove("active");
    }, 4000);
}

let sendBtn = document.querySelector("#send");
sendBtn.onclick = sendMessage;