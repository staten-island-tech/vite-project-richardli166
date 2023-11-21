import {chinesefoodmenu} from "./menu";
import {DOMSelectors} from './dom';


function insertAll() {
    chinesefoodmenu.forEach((food) => DOMSelectors.allCards.insertAdjacentHTML("beforeend",
    `<div class="card" id="all">
      <h3 class="card-title">${food.name}</h3>
      <img src="${food.imageSrc}" alt="${food.name}" class="card-img">
      <h3 class="card-description">${food.price} | Piece(s): ${food.pieces} | Type: ${food.type}</h3>
      
    </div>
    `)
    );
  }
  
  function insertAppetizer() {
    const filtered = chinesefoodmenu.filter((food) => food.type.includes("Appetizer"));
    filtered.forEach((food) => DOMSelectors.allCards.insertAdjacentHTML("beforeend", 
    `<div class="card" id="appetizer">
      <h2 class="card-title">${food.name}</h2>
      <img src="${food.imageSrc}" alt="${food.name}" class="card-img">
      <p class="card-description">${food.price} / Piece(s): ${food.pieces}, Type: ${food.type}</p>
    </div>
    `)
    );
  }
  
  function insertChicken() {
    const filtered = chinesefoodmenu.filter((food) => food.type.includes("Chicken"));
    filtered.forEach((food) => DOMSelectors.allCards.insertAdjacentHTML("beforeend", 
    `<div class="card" id="chicken">
      <h2 class="card-title">${food.name}</h2>
      <img src="${food.imageSrc}" alt="${food.name}" class="card-img">
      <p class="card-description">${food.price} / Piece(s); ${food.pieces}, Type: ${food.type}</p>
    </div>
    `)
    );
  }
  
  function insertBeef() {
    const filtered = chinesefoodmenu.filter((food) => food.type.includes("Beef"));
    filtered.forEach((food) => DOMSelectors.allCards.insertAdjacentHTML("beforeend", 
    `<div class="card" id="beef">
      <h2 class="card-title">${food.name}</h2>
      <img src="${food.imageSrc}" alt="${food.name}" class="card-img">
      <p class="card-description">${food.price} / Piece(s): ${food.pieces}, Type: ${food.type}</p>
    </div>
    `)
    );
  }
  
  function insertPork() {
    const filtered = chinesefoodmenu.filter((food) => food.type.includes("Pork"));
    filtered.forEach((food) => DOMSelectors.allCards.insertAdjacentHTML("beforeend", 
    `<div class="card" id="pork">
      <h2 class="card-title">${food.name}</h2>
      <img src="${food.imageSrc}" alt="${food.name}" class="card-img">
      <p class="card-description">${food.price} / Piece(s): ${food.pieces}, Type: ${food.type}</p>
    </div>
    `)
    );
  }
  
  function insertDuck() {
    const filtered = chinesefoodmenu.filter((food) => food.type.includes("Duck"));
    filtered.forEach((food) => DOMSelectors.allCards.insertAdjacentHTML("beforeend", 
    `<div class="card" id="duck">
      <h2 class="card-title">${food.name}</h2>
      <img src="${food.imageSrc}" alt="${food.name}" class="card-img">
      <p class="card-description">${food.price} / Piece(s): ${food.pieces}, Type: ${food.type}</p>
    </div>
    `)
    );
  }
  
  function insertSeafood() {
    const filtered = chinesefoodmenu.filter((food) => food.type.includes("Seafood"));
    filtered.forEach((food) => DOMSelectors.allCards.insertAdjacentHTML("beforeend", 
    `<div class="card" id="seafood">
      <h2 class="card-title">${food.name}</h2>
      <img src="${food.imageSrc}" alt="${food.name}" class="card-img">
      <p class="card-description">${food.price} / Piece(s): ${food.pieces}, Type: ${food.type}</p>
    </div>
    `)
    );

function insertDumplings() {
    const filtered = chinesefoodmenu.filter((food) => food.type.includes("Dumplings"));
    filtered.forEach((food) => DOMSelectors.allCards.insertAdjacentHTML("beforeend", 
    `<div class="card" id="dumplings">
      <h2 class="card-title">${food.name}</h2>
      <img src="${food.imageSrc}" alt="${food.name}" class="card-img">
      <p class="card-description">${food.price} / Piece(s): ${food.pieces}, Type: ${food.type}</p>
    </div>
    `)
    );
  }
}

function insertNoodles() {
    const filtered = chinesefoodmenu.filter((food) => food.type.includes("Noodles"));
    filtered.forEach((food) => DOMSelectors.allCards.insertAdjacentHTML("beforeend", 
    `<div class="card" id="noodles">
      <h2 class="card-title">${food.name}</h2>
      <img src="${food.imageSrc}" alt="${food.name}" class="card-img">
      <p class="card-description">${food.price} / Piece(s): ${food.pieces}, Type: ${food.type}</p>
    </div>
    `)
    );
  }
function insertVegetarian() {
    const filtered = chinesefoodmenu.filter((food) => food.type.includes("Vegetarian"));
    filtered.forEach((food) => DOMSelectors.allCards.insertAdjacentHTML("beforeend", 
    `<div class="card" id="vegetarian">
      <h2 class="card-title">${food.name}</h2>
      <img src="${food.imageSrc}" alt="${food.name}" class="card-img">
      <p class="card-description">${food.price} / Piece(s): ${food.pieces}, Type: ${food.type}</p>
    </div>
    `)
    );
  }
function insertRice() {
    const filtered = chinesefoodmenu.filter((food) => food.type.includes("Rice"));
    filtered.forEach((food) => DOMSelectors.allCards.insertAdjacentHTML("beforeend", 
    `<div class="card" id="rice">
      <h2 class="card-title">${food.name}</h2>
      <img src="${food.imageSrc}" alt="${food.name}" class="card-img">
      <p class="card-description">${food.price} / Piece(s): ${food.pieces}, Type: ${food.type}</p>
    </div>
    `)
    );
  }
function insertSoup() {
    const filtered = chinesefoodmenu.filter((food) => food.type.includes("Soup"));
    filtered.forEach((food) => DOMSelectors.allCards.insertAdjacentHTML("beforeend", 
    `<div class="card" id="soup">
      <h2 class="card-title">${food.name}</h2>
      <img src="${food.imageSrc}" alt="${food.name}" class="card-img">
      <p class="card-description">${food.price} / Piece(s): ${food.pieces}, Type: ${food.type}</p>
    </div>
    `)
    );
  }

  function removeEverything() {
    const all = document.querySelectorAll("#all");
    const appetizer = document.querySelectorAll("#appetizer");
    const chicken = document.querySelectorAll("#chicken");
    const beef = document.querySelectorAll("#beef");
    const pork = document.querySelectorAll("#pork");
    const duck = document.querySelectorAll("#duck");
    const seafood = document.querySelectorAll("#seafood");
    const dumplings = document.querySelectorAll("#dumplings");
    const noodles = document.querySelectorAll("#noodles");
    const vegetarian = document.querySelectorAll("#vegetarian");
    const rice = document.querySelectorAll("#rice");
    const soup = document.querySelectorAll("#soup");
    all.forEach((food) => food.remove());
    all.forEach((food) => food.remove());
    appetizer.forEach((food) => food.remove());
    chicken.forEach((food) => food.remove());
    beef.forEach((food) => food.remove());
    pork.forEach((food) => food.remove());
    duck.forEach((food) => food.remove());
    seafood.forEach((food) => food.remove());
    dumplings.forEach((food) => food.remove());
    noodles.forEach((food) => food.remove());
    vegetarian.forEach((food) => food.remove());
    rice.forEach((food) => food.remove());
    soup.forEach((food) => food.remove());
  }

export {insertAll, insertAppetizer, insertChicken, insertBeef, insertPork, insertDuck, insertSeafood, insertNoodles, insertVegetarian, insertRice, insertSoup, removeEverything};