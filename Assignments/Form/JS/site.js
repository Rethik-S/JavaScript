function validate() {
    var fname = document.getElementById("fname").value.trim();
    var lname = document.getElementById("lname").value.trim();
    var email = document.getElementById("email").value.trim();
    var number = document.getElementById("number").value.trim();
    var pass = document.getElementById("pass").value.trim();
    var address = document.getElementById("address").value.trim();
    var languages = document.getElementsByName("languages");
    var gender = document.getElementsByName("gender");


    isValid = true;

    //name
    if (fname == "" || lname == "") {
        var error = document.getElementById("nameInvalid");
        error.innerHTML = "Enter valid name.";
        isValid = false;
    }

    //email validation
    var emailRegex = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})/;
    if (!emailRegex.test(email)) {
        var error = document.getElementById("emailInvalid");
        error.innerHTML = "Enter valid email";
        isValid = false;
    }

    //phone number
    var numRegex = /^[7-9][0-9]{9}$/;
    if (!numRegex.test(number)) {
        var error = document.getElementById("numberInvalid");
        error.innerHTML = "Enter valid number";
        isValid = false;
    }

    //pass
    if (pass == "") {
        var error = document.getElementById("passInvalid");
        error.innerHTML = "Enter valid password.";
        isValid = false;
    }

    //address
    if (address == "") {
        var error = document.getElementById("addressInvalid");
        error.innerHTML = "Enter valid address.";
        isValid = false;
    }

    //languages
    var langCount = 0;
    for (var i = 0; i < languages.length; i++) {
        if (languages[i].checked == true) {
            langCount++;
        }
    }
    if (langCount == 0) {
        var error = document.getElementById("languageInvalid");
        error.innerHTML = "Select a language";
        isValid = false;
    }

    //gender
    var genderCount = 0;
    for (var i = 0; i < languages.length; i++) {
        if (gender[i].checked == true) {
            genderCount++;
        }
    }
    if (genderCount == 0) {
        var error = document.getElementById("genderInvalid");
        error.innerHTML = "Select a gender";
        isValid = false;
    }

    //interest
    var select = document.getElementById("interest").options;
    if (select.selectedIndex == -1) {
        var error = document.getElementById("interestInvalid");
        error.innerHTML = "Select a interest";
        isValid = false;
    }
    return isValid;
}

function pushToTable() {
    event.preventDefault();
    if (validate()) {

        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var email = document.getElementById("email").value;
        var number = document.getElementById("number").value;
        var pass = document.getElementById("pass").value;
        var address = document.getElementById("address").value;
        var dob = document.getElementById("dob").value;
        var time = document.getElementById("time").value;


        var nameElement = document.getElementById("table-name");
        var emailElement = document.getElementById("table-email");
        var numberElement = document.getElementById("table-number");
        var passElement = document.getElementById("table-pass");
        var genderElement = document.getElementById("table-gender");
        var addressElement = document.getElementById("table-address");
        var dobElement = document.getElementById("table-date");
        var timeElement = document.getElementById("table-time");

        nameElement.innerHTML = fname + " " + lname;
        emailElement.innerHTML = email;
        numberElement.innerHTML = number;
        passElement.innerHTML = pass;
        addressElement.innerHTML = address;
        dobElement.innerHTML = dob
        timeElement.innerHTML = time;

        var languagesList = new Array();

        var languages = document.getElementsByName("languages");
        for (var i = 0; i < languages.length; i++) {
            if (languages[i].checked == true) {
                languagesList.push(languages[i]);
            }
        }

        var languagesElement = document.getElementById("table-languages");
        for (var i = 0; i < languagesList.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = languagesList[i].value;
            languagesElement.appendChild(li);
        }

        var selectedList = new Array();

        var select = document.getElementById("interest").options;
        for (var i = 0; i < select.length; i++) {
            if (select[i] != null && select[i].selected == true) {
                selectedList.push(select[i].value);
            }
        }

        var selectionElement = document.getElementById("table-interest")
        for (var i = 0; i < selectedList.length; i++) {
            var selectli = document.createElement("li");
            selectli.innerHTML = selectedList[i];
            selectionElement.appendChild(selectli);
        }

        if (document.getElementById("male").checked == true) {
            genderElement.innerHTML = "MALE";
        }
        else if (document.getElementById("female").checked == true) {
            genderElement.innerHTML = "FEMALE";
        }
        else {
            genderElement.innerHTML = "Not wish to Disclose";
        }

        document.getElementById("form").style.display = "none";
        document.getElementById("table").style.display = "block";


    }
}

function nameValidate() {
    var fname = document.getElementById("fname").value.trim();
    var lname = document.getElementById("lname").value.trim();
    //name
    var error = document.getElementById("nameInvalid");
    if (fname == "" || lname == "") {
        error.innerHTML = "Enter valid name.";
        error.style.display = "block";
    }
    else {
        error.style.display = "none";
        return fname;
    }
    return false;

}

function emailValidate() {
    var email = document.getElementById("email").value.trim();
    //email
    var emailRegex = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})/;
    var error = document.getElementById("emailInvalid");

    if (!emailRegex.test(email)) {
        error.innerHTML = "Enter valid email";
        error.style.display = "block";
    }
    else {
        error.style.display = "none";
        return email;
    }
    return false;
}

function numberValidate() {
    var number = document.getElementById("number").value.trim();

    //phone number
    var numRegex = /^[7-9][0-9]{9}$/;
    var error = document.getElementById("numberInvalid");

    if (!numRegex.test(number)) {
        error.innerHTML = "Enter valid number";
        error.style.display = "block";
    }
    else {
        error.style.display = "none";
        return number;
    }

    return false;

}

function passValidate() {
    var pass = document.getElementById("pass").value.trim();
    //pass
    var error = document.getElementById("passInvalid");
    if (pass == "") {
        error.innerHTML = "Enter valid password.";
        error.style.display = "block";
    }
    else {
        error.style.display = "none";
        return pass;
    }
    return false;

}
function addressValidate() {
    var address = document.getElementById("address").value.trim();
    //pass
    var error = document.getElementById("addressInvalid");
    if (address == "") {
        error.innerHTML = "Enter valid address.";
        error.style.display = "block";
    }
    else {
        error.style.display = "none";
        return address;
    }
    return false;

}


function HandleBack() {
    document.getElementById("form").style.display = "block";
    document.getElementById("table").style.display = "none";

    var form = document.getElementById("form");
    form.submit();
    form.reset();
}