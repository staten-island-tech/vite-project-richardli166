const DOMSelectors = {
    form: document.querySelector("#form"),
    openerName: document.querySelector(".name"),
    discoveredBy: document.querySelector(".price"),
    Card: document.querySelector("#carddisplay"),
}

function input(){
    DOMSelectors.Card.insertAdjacentHTML("beforeend",
    `<div class="inserts">
        <h1 class="namecard">${DOMSelectors.openerName.value}</h1>
        <h2>${DOMSelectors.price.value}</h2>
    </div>`
);
}

function clearfield(){
    DOMSelectors.openerName.value = "";
    DOMSelectors.discoveredBy.value = "";
    DOMSelectors.bag.value = "";
}

DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
    input();
    clearfield();
    });