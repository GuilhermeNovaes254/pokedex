
const card = document.querySelector(".card");
const cards = document.querySelector(".cards");

for(let i=0; i < 15; i++ ){

    const clone = card.cloneNode(true);
    cards.appendChild(clone);
}

// const colors = {
//     fire: "#e4604d",
//     grass: "#9DD465",
//     eletric: "#F9E45F",
//     water: "#6A83D6",
//     ground: "#E4C967",
//     rock: "#CABB7B",
//     fairy: "#EEB2FA",
//     poison: "#9F619D",
//     bug: "#C5CF4A",
//     dragon: "#857AF7",
//     psychic: "#E56EAF",
//     flying: "#80A4F9",
//     fighting: "#9B5A48",
//     normal: "#BAB8AB"   
// };

// const style = [];
// for( let key in colors ){
//     const css = `
//     .bg-${key}{
//         background: linear-gradient( to top right, ${colors[key]}, #3d3d3d 25%);
//     }
//     .${key}{
//         background-color: ${colors[key]};
//     }
//     `;
//     style.push(css);
// }

// console.log(style)