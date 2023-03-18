

categoryLink = document.getElementById("categoryLink").addEventListener("click", displayCategory)
mycategory = document.getElementById("Categories")
myarea = document.getElementById("area")
myingredients = document.getElementById("Ingredients")
search = document.getElementById("search")
foodsOfCategories = document.getElementById("foodsOfCategories")
foodsOfCategoriesDetails = document.getElementById("foodsOfCategoriesDetails")
contactUs = document.getElementById("contactUs")

document.getElementById("ingredientsLink").addEventListener("click", function () {
    foodsOfCategories.classList.add("d-none")
    foodsOfCategoriesDetails.classList.add("d-none")
    contactUs.classList.add("d-none")
})
document.getElementById("areaLink").addEventListener("click", function () {
    foodsOfCategories.classList.add("d-none")
    foodsOfCategoriesDetails.classList.add("d-none")
    contactUs.classList.add("d-none")
})



function displayCategory(info) {
    info.preventDefault()
    $("#sideNaveBar").animate({ left: "-20%" }, 700)
    document.getElementById("openNavBar").classList.replace("d-none", "d-block")
    document.getElementById("closeNavBar").classList.add("d-none")
    mycategory.classList.replace("d-none", "d-block")
    myarea.classList.add("d-none")
    myingredients.classList.add("d-none")
    search.classList.add("d-none")
    foodsOfCategories.classList.add("d-none")
    foodsOfCategoriesDetails.classList.add("d-none")

    fetchCategoryApi()
}

async function fetchCategoryApi(x) {
    let api = `https://www.themealdb.com/api/json/v1/1/categories.php`
    let fristRespons = await fetch(api)
    let finalResponse = await fristRespons.json()
    let finalResponseCategory = finalResponse.categories
    let cartona = ``
    for (let i = 0; i < finalResponseCategory.length; i++) {
        cartona += `<div onclick='displayCategoryLists("${finalResponseCategory[i].strCategory}")' class="col-md-3 pointer">
        <div class="dish position-relative overflow-hidden rounded-4">
        <img src="${finalResponseCategory[i].strCategoryThumb}" class="img-fluid rounded-4" alt="">
        <div class="p-2 layer w-100 h-100 position-absolute text-center">
        <h2>${finalResponseCategory[i].strCategory}</h2>
        <p>${finalResponseCategory[i].strCategoryDescription.slice(0, 100)}</p>
        </div>
        </div>
        </div>`

    }
    document.getElementById("categoryResponse").innerHTML = cartona
    // return finalResponseCategory
}

async function displayCategoryLists(info) {
    let api = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${info}`
    let fristRespons = await fetch(api)
    let finalResponse = await fristRespons.json()
    let finalResponseCategory = finalResponse.meals
    document.getElementById("Categories").classList.replace("d-block", "d-none")
    document.getElementById("foodsOfCategories").classList.replace("d-none", "d-block")
    let cartona = ``
    for (let i = 0; i < finalResponseCategory.length; i++) {
        cartona += `<div onclick='displayDetailsOfCategory("${finalResponseCategory[i].idMeal}")' class="col-md-3 pointer">
        <div class="dish bg- position-relative overflow-hidden rounded-4">
            <img src="${finalResponseCategory[i].strMealThumb}" class="img-fluid rounded-4" alt="">
            <div class="p-2 layer w-100 h-100 position-absolute d-flex align-items-center">
                <h2>${finalResponseCategory[i].strMeal}</h2>
            </div>
        </div>
    </div>`
    }
    document.getElementById("responseOfListCategory").innerHTML = cartona
}

function displayDetailsOfCategory(info) {
    foodsOfCategories.classList.replace("d-block", "d-none")
    foodsOfCategoriesDetails.classList.replace("d-none", "d-block")

    fetchDisplayDetailsOfCategoryApi(info)
}

async function fetchDisplayDetailsOfCategoryApi(info) {
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
document.getElementById("detailsResponse").innerHTML = cartona

}

