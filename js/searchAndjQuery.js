
// search
let searchLink = document.getElementById("searchLink").addEventListener("click",displaySearch)
let search = document.getElementById("search")
let searchDetalis = document.getElementById("searchDetails")
let searchByNameBar = document.getElementById("searchByName")
let searchByFristLetterBar = document.getElementById("searchByFristLetter")
let mycategory = document.getElementById("Categories")
let myarea = document.getElementById("area")
let myingredients = document.getElementById("Ingredients")
let mainHomeLink = document.getElementById("mainHome")
let mainDetailsLink = document.getElementById("mainDetails")
searchByNameBar.addEventListener("keyup",searchByName)
searchByFristLetterBar.addEventListener("keyup",searchByLetter)


function displaySearch (info){
    info.preventDefault()
    $("#sideNaveBar").animate({ left: "-20%" }, 700)
    document.getElementById("openNavBar").classList.replace("d-none", "d-block")
    document.getElementById("closeNavBar").classList.add("d-none")
    search.classList.replace("d-none", "d-block")
    mycategory.classList.add("d-none")
    myarea.classList.add("d-none")
    myingredients.classList.add("d-none")
    mainHomeLink.classList.add("d-none")
    document.getElementById("detailsFoodsInArea").classList.add("d-none")
    document.getElementById("foodsOfCategoriesDetails").classList.add("d-none")
    document.getElementById("detailsFoodsInIngredients").classList.add("d-none")
    document.getElementById("contactUs").classList.add("d-none")
}

async function searchByName (info) {
    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${info.target.value}`)
    let fristResponse = await api.json()
    let finalResponse = fristResponse.meals
    let cartona=``
    for (let i = 0; i < finalResponse.length; i++) {
        cartona+=`<div onclick='displayDetailsOfSearch("${finalResponse[i].idMeal}")' class="col-md-3 pointer">
        <div class="dish bg- position-relative overflow-hidden rounded-4">
        <img src="${finalResponse[i].strMealThumb}" class="img-fluid rounded-4" alt="">
        <div class="p-2 layer w-100 h-100 position-absolute d-flex align-items-center">
        <h2>${finalResponse[i].strMeal}</h2>
        </div>
        </div>
        </div>`
        
    }
    document.getElementById("searchByNameResponse").innerHTML=cartona
}

async function searchByLetter (info) {
    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${info.key}`)
    let fristResponse = await api.json()
    let finalResponse = fristResponse.meals
    let cartona=``
    for (let i = 0; i < finalResponse.length; i++) {
        cartona+=`<div onclick='displayDetailsOfSearch("${finalResponse[i].idMeal}")' class="col-md-3 pointer">
        <div class="dish bg- position-relative overflow-hidden rounded-4">
        <img src="${finalResponse[i].strMealThumb}" class="img-fluid rounded-4" alt="">
        <div class="p-2 layer w-100 h-100 position-absolute d-flex align-items-center">
        <h2>${finalResponse[i].strMeal}</h2>
        </div>
        </div>
        </div>`
        
    }
    document.getElementById("searchByLetterResponse").innerHTML=cartona
}

function displayDetailsOfSearch(info) {
    search.classList.replace("d-block", "d-none")
    searchDetalis.classList.replace("d-none", "d-block")

    fetchDisplayDetailsOfIngredientsApi(info)
}

async function fetchDisplayDetailsOfSearchApi(info) {
    let api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${info}`
    let fristRespons = await fetch(api)
    let finalResponse = await fristRespons.json()
    let finalResponseCategory = finalResponse.meals

    let cartona = `<div class="col-md-4 text-white">
    <img src="${finalResponseCategory[0].strMealThumb}" class="img-fluid rounded-4" alt="">
    <p class="fs-2 fw-medium">${finalResponseCategory[0].strMeal}</p>
</div>
<div class="col-md-8 text-white">
    <h2>Instructions</h2>
    <p>${finalResponseCategory[0].strInstructions}</p>
    <p class="fs-2">area : <span>${finalResponseCategory[0].strArea}</span></p>
    <p class="fs-2">Category : <span>${finalResponseCategory[0].strCategory}</span></p>
    <p class="fs-2">Recipes :<span class="d-flex">
            <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure1} of ${finalResponseCategory[0].strIngredient1}</p>
            <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure2} of ${finalResponseCategory[0].strIngredient2}</p>
            <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure3} of ${finalResponseCategory[0].strIngredient3}</p>
            <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure4} of ${finalResponseCategory[0].strIngredient4}</p>
            <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure5} of ${finalResponseCategory[0].strIngredient5}</p>
            <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure6} of ${finalResponseCategory[0].strIngredient6}</p>
            <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure7} of ${finalResponseCategory[0].strIngredient7}</p>
            <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure8} of ${finalResponseCategory[0].strIngredient8}</p>
            <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure9} of ${finalResponseCategory[0].strIngredient9}</p>

        </span></p>
    <p class="fs-2">Tages : <span class="text-bg-info fs-6 px-2 py-1 rounded-2">${finalResponseCategory[0].strTags}</span></p>
    <div>
        <button class="btn btn-success">Source</button>
        <a class="btn btn-danger" href="${finalResponseCategory[0].strYoutube}" target="_blank">Youtube</a>
    </div>
</div>`
document.getElementById("searchdetailsResponse").innerHTML = cartona

}

// ---------------------------------------------------------------------------------------//
// home 
async function mainHome (x) {
    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    let fristResponse = await api.json()
    let finalResponse = fristResponse.meals
    let cartona=``
    for (let i = 0; i < finalResponse.length; i++) {
        cartona+=`<div onclick='displayDetailsOfHome("${finalResponse[i].idMeal}")' class="col-md-3 pointer">
        <div class="dish bg- position-relative overflow-hidden rounded-4">
        <img src="${finalResponse[i].strMealThumb}" class="img-fluid rounded-4" alt="">
        <div class="p-2 layer w-100 h-100 position-absolute d-flex align-items-center">
        <h2>${finalResponse[i].strMeal}</h2>
        </div>
        </div>
        </div>`
        
    }
    document.getElementById("homeResponse").innerHTML=cartona
}
mainHome()


function displayDetailsOfHome(info) {
    mainHomeLink.classList.replace("d-block","d-none")
    mainDetailsLink.classList.replace("d-none", "d-block")

    DisplayDetailsOfHomeApi(info)
}

async function DisplayDetailsOfHomeApi(info) {
    let api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${info}`
    let fristRespons = await fetch(api)
    let finalResponse = await fristRespons.json()
    let finalResponseCategory = finalResponse.meals
    console.log(finalResponse);

//     let cartona = `<div class="col-md-4 text-white">
//     <img src="${finalResponseCategory[0].strMealThumb}" class="img-fluid rounded-4" alt="">
//     <p class="fs-2 fw-medium">${finalResponseCategory[0].strMeal}</p>
// </div>
// <div class="col-md-8 text-white">
//     <h2>Instructions</h2>
//     <p>${finalResponseCategory[0].strInstructions}</p>
//     <p class="fs-2">area : <span>${finalResponseCategory[0].strArea}</span></p>
//     <p class="fs-2">Category : <span>${finalResponseCategory[0].strCategory}</span></p>
//     <p class="fs-2">Recipes :<span class="d-flex">
//             <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure1} of ${finalResponseCategory[0].strIngredient1}</p>
//             <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure2} of ${finalResponseCategory[0].strIngredient2}</p>
//             <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure3} of ${finalResponseCategory[0].strIngredient3}</p>
//             <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure4} of ${finalResponseCategory[0].strIngredient4}</p>
//             <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure5} of ${finalResponseCategory[0].strIngredient5}</p>
//             <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure6} of ${finalResponseCategory[0].strIngredient6}</p>
//             <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure7} of ${finalResponseCategory[0].strIngredient7}</p>
//             <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure8} of ${finalResponseCategory[0].strIngredient8}</p>
//             <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure9} of ${finalResponseCategory[0].strIngredient9}</p>

//         </span></p>
//     <p class="fs-2">Tages : <span class="text-bg-info fs-6 px-2 py-1 rounded-2">${finalResponseCategory[0].strTags}</span></p>
//     <div>
//         <button class="btn btn-success">Source</button>
//         <a class="btn btn-danger" href="${finalResponseCategory[0].strYoutube}" target="_blank">Youtube</a>
//     </div>
// </div>`
// document.getElementById("mainDetailsResponse").innerHTML = cartona

}



// -------------------------------------------------------------------------------------//
// jQuery
$(document).ready(function () {
    $("#loading .sk-circle").fadeOut(500, function () {
        $("#loading").fadeOut(500, function () {
            $("body").css("overflow", "auto")
        })
    })
})

$("#openNavBar").click(function () {
    $("#sideNaveBar").animate({ left: 0 }, 700)
    document.getElementById("openNavBar").classList.add("d-none")
    document.getElementById("closeNavBar").classList.replace("d-none","d-block")
    // $("#navBar li").show();

})
$("#closeNavBar").click(function () {
    $("#sideNaveBar").animate({ left: "-20%" }, 700)
    document.getElementById("openNavBar").classList.replace("d-none","d-block")
    document.getElementById("closeNavBar").classList.add("d-none")
    // $("#navBar li").hide();
})










