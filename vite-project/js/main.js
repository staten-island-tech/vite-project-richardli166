import "../css/style.css";
import {DOMSelectors} from './dom';
import {chinesefoodmenu} from "./menu";
import {inserts} from "./inserts"

DOMSelectors.all.addEventListener("click", function () {
    DOMSelectors.box.innerHTML = "";
    inserts(menu);
  });
  
DOMSelectors.Appetizer.addEventListener("click", function () {
    DOMSelectors.allCards.innerHTML = "";
    const appetizer = chinesefoodmenu.filter((item) => item.type.includes("appetizer"));
    inserts(appetizer);
  });

DOMSelectors.Chicken.addEventListener("click", function () {
    DOMSelectors.allCards.innerHTML = "";
    const chicken = chinesefoodmenu.filter((item) => item.type.includes("chicken"));
    inserts(chicken);
  });

DOMSelectors.Beef.addEventListener("click", function () {
    DOMSelectors.allCards.innerHTML = "";
    const beef = chinesefoodmenu.filter((item) => item.type.includes("beef"));
    inserts(beef);
});
  
DOMSelectors.Pork.addEventListener("click", function () {
    DOMSelectors.allCards.innerHTML = "";
    const pork = chinesefoodmenu.filter((item) => item.type.includes("pork"));
    inserts(pork);
});
  
DOMSelectors.Duck.addEventListener("click", function () {
    DOMSelectors.allCards.innerHTML = "";
    const duck = chinesefoodmenu.filter((item) => item.type.includes("duck"));
    inserts(duck);
});
  
DOMSelectors.Seafood.addEventListener("click", function () {
    DOMSelectors.allCards.innerHTML = "";
    const seafood = chinesefoodmenu.filter((item) => item.type.includes("seafood"));
    inserts(seafood);
});
   
DOMSelectors.Noodles.addEventListener("click", function () {
    DOMSelectors.allCards.innerHTML = "";
    const noodles = chinesefoodmenu.filter((item) => item.type.includes("noodles"));
    inserts(noodles);
})

DOMSelectors.Vegetarian.addEventListener("click", function () {
    DOMSelectors.allCards.innerHTML = "";
    const vegetarian = chinesefoodmenu.filter((item) => item.type.includes("vegetarian"));
    inserts(vegetarian);
});
          
DOMSelectors.Rice.addEventListener("click", function () {
    DOMSelectors.allCards.innerHTML = "";
    const rice = chinesefoodmenu.filter((item) => item.type.includes("rice"));
    inserts(rice);
});

DOMSelectors.Soup.addEventListener("click", function () {
    DOMSelectors.allCards.innerHTML = "";
    const soup = chinesefoodmenu.filter((item) => item.type.includes("soup"));
    inserts(soup);
});

  
document.querySelector("#mode-button").addEventListener("click", function () {
    if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    }
    else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
}
});
inserts(chinesefoodmenu);









// import javascriptLogo from './javascript.svg';
// import viteLogo from '/vite.svg';
// import { setupCounter } from './counter.js';

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter')