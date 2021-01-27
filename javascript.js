
const card = document.querySelector(".card");
const cards = document.querySelector(".cards");

for(let i=0; i < 15; i++ ){

    const clone = card.cloneNode(true);
    cards.appendChild(clone);
}