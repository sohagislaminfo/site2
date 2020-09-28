let emailBtn = document.querySelector('#emailBtn');
let phoneBtn = document.querySelector('#mobileBtn');
let PostBtn = document.querySelector('#postBtn');


class UI {
    static validation(message, expression, valid, invalid, ifInputNoValue) {
        let input = window.prompt(message);
        let re = expression;
        if (input === null) {
            return;
        } else if (input === "") {
            UI.showAlert(ifInputNoValue, "error")
        } else {
            let result = re.test(input);
            switch (result) {
                case true:
                    UI.showAlert(valid, "success")
                    break;
                default:
                    UI.showAlert(invalid, "error");
                    break;
            }

        }
    }

    static showAlert(message, className) {
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        let via = document.querySelector('#via');
        let container = document.querySelector('.container');
        container.insertBefore(div, via);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 2000);
    }
}





emailBtn.addEventListener('click', chackEmail);
mobileBtn.addEventListener('click', chackPhone);
PostBtn.addEventListener('click', chackPost);


function chackEmail() {
    UI.validation("Email:", /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/, "Valid Email", "Invalid Email", "Type your email");
}
function chackPhone() {
    UI.validation("Phone Number:", /^(?:\+88|88)?(01[3-9]\d{8})$/, "Valid Phone Number", "Invalid Phone Number", "Type your phone number");
}
function chackPost() {
    UI.validation("Post Code:", /^[0-9]{4}$/, "Valid Post Code", "Invalid Post Code", "Type your post code");
}



