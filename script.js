function setMinDate() {
    var myDateInput = document.getElementById('date');

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    var todayString = yyyy + '-' + mm + '-' + dd;
    myDateInput.min = todayString;
}

document.addEventListener('DOMContentLoaded', setMinDate);

function validation() {
    event.preventDefault();

    var isValid = true;

    if (!validateText("name")) {
        isValid = false;
    }
    if (!validateText("lastname")) {
        isValid = false;
    }
    if (!validatePhoneNumber("phonenumber")) {
        isValid = false;
    }
    if (!validateEmail("email")) {
        isValid = false;
    }
    if (!validateCheckboxes()){
        isValid = false;
    }
    if (!validateDate("date")){
        isValid = false;
    }
    return isValid;
}

function validateText(FieldID){
    var nameField = document.getElementById(FieldID);
    var contentField = nameField.value;


    if (contentField=== "") {
        nameField.classList.add("error");
        nameField.classList.remove("correct");
        return false;
   } else {
        nameField.classList.remove("error");
        nameField.classList.add("correct");
        return true;
   }
}

function validatePhoneNumber(FieldID) {

    var nameField = document.getElementById(FieldID);
    var contentField = nameField.value;

    var phonePattern = /^\+\d{2}\s\d{3}-\d{3}-\d{3}$/;

    if (phonePattern.test(contentField)) {
        nameField.classList.remove("error");
        nameField.classList.add("correct");
        return true; 
    } else {
        nameField.classList.add("error");
        nameField.classList.remove("correct");
        return false; 
    }
}

function validateEmail(FieldID) {

    var nameField = document.getElementById(FieldID);
    var contentField = nameField.value;


    if (contentField.indexOf("@") === -1) {
        nameField.classList.add("error");
        nameField.classList.remove("correct");
        return false
    } else {
        nameField.classList.remove("error");
        nameField.classList.add("correct");
        return true
    }
}

function validateCheckboxes(){
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var counter = 0;

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) counter++;
    });
    if (counter === 0) {
        komunikat.style.display = "block";
        document.getElementById('komunikat').textContent = "Proszę wybrać co najmniej jeden zabieg";
        return false;
    }
    else{
        komunikat.style.display = "none";
        return true;
    }
}

function validateDate(FieldID){
    var nameField = document.getElementById(FieldID);
    var contentField = nameField.value;

    if (!contentField) {
        nameField.classList.add("error");
        nameField.classList.remove("correct");
        return false;
   } else {
        nameField.classList.remove("error");
        nameField.classList.add("correct");
        return true;
   }
}

document.getElementById('FormReservation').addEventListener('submit', function (e) {
    e.preventDefault();

    if (validation()){
        var overlay = document.getElementById('overlay');
        overlay.style.display = 'block';
    }
});

document.getElementById('overlay').addEventListener('click', function () {
    this.style.display = 'none';
});
