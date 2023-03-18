
document.getElementById("contactUsLink").addEventListener("click", displayContact)
let contactUs = document.getElementById("contactUs")
let mainHomeLink = document.getElementById("mainHome")

mycategory = document.getElementById("Categories")
myarea = document.getElementById("area")
myingredients = document.getElementById("Ingredients")
search = document.getElementById("search")
foodsOfCategories = document.getElementById("foodsOfCategories")
foodsOfCategoriesDetails = document.getElementById("foodsOfCategoriesDetails")
foodsInArea = document.getElementById("foodsInArea")
detailsFoodsInArea = document.getElementById("detailsFoodsInArea")
foodsInIngredients = document.getElementById("foodsInIngredients")
detailsFoodsInIngredients = document.getElementById("detailsFoodsInIngredients")


let usernameInput = document.getElementById("usernameInput");
let usernameAlert = document.getElementById("usernameAlert");

let userPhoneInput = document.getElementById("userPhoneInput");
let userPhoneAlert = document.getElementById("userPhoneAlert");

let userPasswordInput = document.getElementById("userPasswordInput");
let userPasswordAlert = document.getElementById("userPasswordAlert");

let userEmailInput = document.getElementById("userEmailInput");
let userEmailAlert = document.getElementById("userEmailAlert");

let userAgeInput = document.getElementById("userAgeInput");
let userAgeAlert = document.getElementById("userAgeAlert");

let Repassword = document.getElementById("Repassword");
let rePassWordAlert = document.getElementById("repasswordAlert");

let submitBtn = document.getElementById("submitBtn");




function displayContact(info) {
    info.preventDefault(info)
    $("#sideNaveBar").animate({ left: "-20%" }, 700)
    document.getElementById("openNavBar").classList.replace("d-none", "d-block")
    document.getElementById("closeNavBar").classList.add("d-none")
    contactUs.classList.replace("d-none", "d-block")
    mainHomeLink.classList.add("d-none")
    mycategory.classList.add("d-none")
    myarea.classList.add("d-none")
    myingredients.classList.add("d-none")
    search.classList.add("d-none")
    foodsOfCategories.classList.add("d-none")
    foodsOfCategoriesDetails.classList.add("d-none")
    foodsInArea.classList.add("d-none")
    detailsFoodsInArea.classList.add("d-none")
    foodsInIngredients.classList.add("d-none")
    detailsFoodsInIngredients.classList.add("d-none")
}

document.addEventListener("keyup" , submit)

function nameValidation() {
    let regex = /^[a-z\sA-Z]+$/
    if (regex.test(usernameInput.value) == true) {
        usernameAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        usernameAlert.classList.replace("d-none", "d-block")
        return false
    }
}

function phoneValidation() {
    let regex = /^[0-9]{11}$/
    if (regex.test(userPhoneInput.value) == true) {
        userPhoneAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        userPhoneAlert.classList.replace("d-none", "d-block")
        return false
    }
}

function passWordValidation() {
    let regex = /^[\w]{8,20}$/
    if (regex.test(userPasswordInput.value) == true) {
        userPasswordAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        userPasswordAlert.classList.replace("d-none", "d-block")
        return false
    }
}

function emailValidation() {
    let regex = /^[a-zA-Z0-9]+[@][a-z]+[.][a-z]+$/
    if (regex.test(userEmailInput.value) == true) {
        userEmailAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        userEmailAlert.classList.replace("d-none", "d-block")
        return false
    }
}

function ageValidation() {
    let regex = /^([1-7][0-9]{1}|80)$/
    if (regex.test(userAgeInput.value) == true) {
        userAgeAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        userAgeAlert.classList.replace("d-none", "d-block")
        return false
    }
}

function rePassWordValidation() {
    if (Repassword.value == userPasswordInput.value) {
        rePassWordAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        rePassWordAlert.classList.replace("d-none", "d-block")
        return false
    }
}

function submit() {
    if (nameValidation() == true && emailValidation() == true && phoneValidation() == true && ageValidation() == true &&
    passWordValidation() == true && rePassWordValidation() == true) {
        submitBtn.removeAttribute("disabled"); 
    } else {
        submitBtn.setAttribute("disabled" , "true"); 
    }
}
