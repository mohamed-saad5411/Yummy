

areaLink = document.getElementById("areaLink").addEventListener("click", displayArea)
mycategory = document.getElementById("Categories")
myarea = document.getElementById("area")
myingredients = document.getElementById("Ingredients")
search = document.getElementById("search")
foodsInArea = document.getElementById("foodsInArea")
detailsFoodsInArea = document.getElementById("detailsFoodsInArea")

document.getElementById("categoryLink").addEventListener("click", function () {
    foodsInArea.classList.add("d-none")
    detailsFoodsInArea.classList.add("d-none")
    document.getElementById("mainHome").classList.add("d-none")
})
document.getElementById("ingredientsLink").addEventListener("click", function () {
    foodsInArea.classList.add("d-none")
    detailsFoodsInArea.classList.add("d-none")
    document.getElementById("mainHome").classList.add("d-none")
})


function displayArea(info) {
    info.preventDefault()
    $("#sideNaveBar").animate({ left: "-20%" }, 700)
    document.getElementById("openNavBar").classList.replace("d-none", "d-block")
    document.getElementById("closeNavBar").classList.add("d-none")
    myarea.classList.replace("d-none", "d-block")
    mycategory.classList.add("d-none")
    myingredients.classList.add("d-none")
    search.classList.add("d-none")
    foodsInArea.classList.add("d-none")
    detailsFoodsInArea.classList.add("d-none")
    fetchAreaApi()
}

async function fetchAreaApi(x) {
    let api = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    let fristRespons = await fetch(api)
    let finalResponse = await fristRespons.json()
    let finalResponseCategory = finalResponse.meals

    let cartona = ``
    for (let i = 0; i < finalResponseCategory.length; i++) {
        cartona += `<div onclick='displayAreaLists("${finalResponseCategory[i].strArea}")' class="col-md-3 pointer">
        <div
            class="position-relative overflow-hidden rounded-4 d-flex align-items-center justify-content-center flex-column p-2">
            <i class="fa-solid fa-house-laptop text-white"></i>
            <p class="fs-2 fw-medium text-white my-0">${finalResponseCategory[i].strArea}</p>
        </div>
    </div>`

    }
    document.getElementById("areaResponse").innerHTML = cartona
    return finalResponseCategory
}



async function displayAreaLists(info) {
    let api = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${info}`
    let fristRespons = await fetch(api)
    let finalResponse = await fristRespons.json()
    let finalResponseCategory = finalResponse.meals
    let cartona = ``
    for (let i = 0; i < finalResponseCategory.length; i++) {
        cartona += `<div onclick='displayDetailsOfArea("${finalResponseCategory[i].idMeal}")' class="col-md-3 pointer">
        <div class="dish bg- position-relative overflow-hidden rounded-4">
            <img src="${finalResponseCategory[i].strMealThumb}" class="img-fluid rounded-4" alt="">
            <div class="p-2 layer w-100 h-100 position-absolute d-flex align-items-center">
                <h2>${finalResponseCategory[i].strMeal}</h2>
            </div>
        </div>
    </div>`
    }
    document.getElementById("areaResponse").innerHTML = cartona
}

function displayDetailsOfArea(info) {
    foodsInArea.classList.replace("d-block","d-none")
    detailsFoodsInArea.classList.replace("d-none", "d-block")

    DisplayDetailsOfAreaApi(info)
}

async function DisplayDetailsOfAreaApi(info) {
    let api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${info}`
    let fristRespons = await fetch(api)
    let finalResponse = await fristRespons.json()
    let finalResponseCategory = finalResponse.meals
    // console.log(finalResponseCategory);

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
document.getElementById("responseOfAreaDetails").innerHTML = cartona

}
