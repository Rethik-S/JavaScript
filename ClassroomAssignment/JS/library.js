
//book name
function booknameValidate() {
    var book = document.getElementById("book").value;
    var error = document.getElementById("bookInvalid");

    var nameRegex = /[a-zA-Z]+/;

    if (nameRegex.test(book)) {
        error.innerHTML = "valid"
        error.style.color = "green";
        return true;
    }
    else {
        error.innerHTML = "book name Invalid";
        error.style.color = "red";
        return false;
    }
}

//author name
function authorNameValidate() {
    var name = document.getElementById("name").value;
    var error = document.getElementById("authorNameInvalid");

    var nameRegex = /[a-zA-Z]+/;

    if (nameRegex.test(name)) {
        error.innerHTML = "valid"
        error.style.color = "green";
        return true;
    }
    else {
        error.innerHTML = "author name Invalid";
        error.style.color = "red";
        return false;
    }
}

//published year
function publishedValidate() {
    var published = document.getElementById("published").value;
    var error = document.getElementById("publishedInvalid");
    if ((published == "") || !(parseInt(published) >= 1000 && parseInt(published) <= 2100)) {
        error.innerHTML = "publish year Invalid";
        error.style.color = "red";
        return false;
    }
    else {
        error.innerHTML = "valid"
        error.style.color = "green";
        return true;
    }
}

//price
function priceValidate() {
    var price = document.getElementById("price").value;
    var error = document.getElementById("priceInvalid");

    var priceRegex = /^(\d{0,5}\.\d{1,2})$/;
    if (priceRegex.test(price)) {
        error.innerHTML = "valid"
        error.style.color = "green";
        return true;
    }
    else {
        error.innerHTML = "Price Invalid";
        error.style.color = "red";
        return false;
    }
}


//email
function emailValidate() {
    var email = document.getElementById("email").value.trim();
    var emailRegex = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})/;
    var error = document.getElementById("emailInvalid");

    if (emailRegex.test(email)) {
        error.innerHTML = "valid"
        error.style.color = "green";
        return true;

    }
    else {
        error.innerHTML = "author email Invalid";
        error.style.color = "red";
        return false;
    }
}

//footer year setting
setTimeout(presentYear, 1)

function presentYear() {
    var year = new Date();
    document.getElementById("date").innerHTML = year.getFullYear();
}

//category
function selectionValidate() {

    var select = document.getElementById("selection").options;
    var error = document.getElementById("selectionInvalid");
    if (select.selectedIndex == -1 || select.selectedIndex == 0) {
        error.innerHTML = "Select a category";
        error.style.color = "red";
        return false;
    }
    else {
        error.innerHTML = "valid";
        error.style.color = "green";
        return true;
    }

}

//table display
function pushToTable() {
    event.preventDefault();
    var flag1 = booknameValidate();
    var flag2 = authorNameValidate();
    var flag3 = priceValidate();
    var flag4 = publishedValidate();
    var flag5 = emailValidate();
    var flag6 = selectionValidate();

    if (flag1 && flag2 & flag3 && flag4 && flag5 && flag6) {

        var tableContainer = document.getElementById("table-container");

        var book = document.getElementById("book").value;
        var name = document.getElementById("name").value;
        var published = document.getElementById("published").value;
        var price = document.getElementById("price").value;
        var email = document.getElementById("email").value.trim();

        document.getElementById("table-book").innerHTML = book;
        document.getElementById("table-email").innerHTML = email;
        document.getElementById("table-author").innerHTML = name;
        document.getElementById("table-published").innerHTML = published;
        document.getElementById("table-price").innerHTML = price;


        var select = document.getElementById("selection").options;

        for (var i = 0; i < select.length; i++) {
            if (select[i] != null && select[i].selected == true) {
                document.getElementById("table-category").innerHTML = select[i].value;
                break;
            }
        }

        document.getElementById("table-header").innerHTML = book + " Book Details";

        tableContainer.style.display = "block";
        document.getElementById("form-container").style.display = "none";

    }
}

//back to home
function handleBack() {
    document.getElementById("table-container").style.display = "none";
    document.getElementById("form-container").style.display = "block";

    var form = document.getElementById("form");
    form.submit();
    form.reset();
}