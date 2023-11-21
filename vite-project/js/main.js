import "../css/style.css";
import {DOMSelectors} from './dom';
import {insertAll, insertAppetizer, insertChicken, insertBeef, insertPork, insertDuck, insertSeafood, insertNoodles, insertVegetarian, insertRice, insertSoup, removeEverything} from "./inserts";

DOMSelectors.all.addEventListener("click", function () {
    removeEverything();
    insertAll();
  });
  
DOMSelectors.Appetizer.addEventListener("click", function () {
    removeEverything();
    insertAppetizer();
  });
  
DOMSelectors.Chicken.addEventListener("click", function () {
    removeEverything();
    insertChicken();
  });
  
DOMSelectors.Beef.addEventListener("click", function () {
    removeEverything();
    insertBeef();
});
  
DOMSelectors.Pork.addEventListener("click", function () {
    removeEverything();
    insertPork();
});
  
DOMSelectors.Duck.addEventListener("click", function () {
    removeEverything();
    insertDuck();
});
  
DOMSelectors.Seafood.addEventListener("click", function () {
    removeEverything();
    insertSeafood();
});
   
DOMSelectors.Noodles.addEventListener("click", function () {
    removeEverything();
    insertNoodles();
})

DOMSelectors.Vegetarian.addEventListener("click", function () {
    removeEverything();
    insertVegetarian();
});
          
DOMSelectors.Rice.addEventListener("click", function () {
    removeEverything();
    insertRice();
});

DOMSelectors.Soup.addEventListener("click", function () {
    removeEverything();
    insertSoup();
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
insertAll();









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