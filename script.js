//set
const charImg = 'https://api.tvmaze.com/shows/84/cast'

const h2 = document.createElement("h2");
h2.textContent = "family test"
document.querySelector("body").appendChild(h2);

// grab character images
fetch(charImg)
    .then((resp) => resp.json())
    .then((charData) => renderCharImg(charData.message));

function renderCharImg(char) {
    
}