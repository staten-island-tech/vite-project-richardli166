import {DOMSelectors} from './dom';

function inserts(array) {
  DOMSelectors.allCards.innerHTML = "";
  array.forEach((food) => DOMSelectors.allCards.insertAdjacentHTML("beforeend",
    `<div class="card">
      <h3 class="card-title">${food.name}</h3>
      <img src="${food.imageSrc}" alt="${food.name}" class="card-img">
      <h3 class="card-description">${food.price} | Piece(s): ${food.pieces} | Type: ${food.type}</h3>
    </div>
    `)
    );
  }

export {inserts};