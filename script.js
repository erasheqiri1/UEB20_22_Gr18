function validateForm() {
    try {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const message = document.getElementById('message').value;

        // Validate Radio Buttons
        if (!validateRadio('gender')) {
            alert('Selekto gjinine.');
            return false;
        }

        // Validate Checkboxes
        if (!validateCheckbox('interests')) {
            alert('Selekto te pakten nje interes.');
            return false;
        }

        // Match name and email
        if (name.match(email)) {
            alert('Emri dhe emaili perputhen. Datat e sotme: ' + new Date().toDateString());
        } else {
            alert('Emri dhe emaili nuk perputhen!');
        }

        return true;
    } catch (error) {
        console.error('Nje error ka ndodhur:', error);
        alert('Nje error ka ndodhur.');
        return false;
    }
}

function validateText(text) {
    return text.trim().length > 0;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    //validimi i gjatesise se passwordit
    return password.length >= 6;
}

function validateRadio(name) {
    const radios = document.getElementsByName(name);
    let isChecked = false;
    let i = 0;

    while (i < radios.length && !isChecked) {
        if (radios[i].checked) {
            isChecked = true;
        }
        i++;
    }

    return isChecked;
}

function validateCheckbox(name) {
    const checkboxes = document.getElementsByName(name);
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            return true;
        }
    }