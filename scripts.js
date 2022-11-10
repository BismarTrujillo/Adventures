"use script";
let categories = [
    "Adventures",
    "Arts & Crafts",
    "Local Sports",
    "Museums",
    "Wine Tastings",
    "Other"
];
window.onload = function () {

    fillDropdown()


}

function fillDropdown() {
    const categoriesList = document.getElementById("categoriesList");
    let blankOption = document.createElement("option");
    blankOption.textContent = "----Choose a category----";
    categoriesList.appendChild(blankOption);

    for(let optionList in categories){
        let categoriesOption = document.createElement("option");
        categoriesOption.textContent = categories[optionList];
        categoriesList.appendChild(categoriesOption);
    }
    
}