//set
const mainImgUrl = 'https://api.tvmaze.com/shows/84/images'
const charImgUrl = 'https://api.tvmaze.com/shows/84/cast'
const div = document.querySelector('div')


//initial image
fetch(mainImgUrl)
    .then((resp) => resp.json())
    .then((json) => {
        alert(JSON.stringify(json));
    })

function renderMainImg(main) {
    main.forEach(mainImg => {
      const img = document.createElement('img');
      img.src = mainImg
      img.innerHTML = mainImg.resolutions.medium
      div.append(img);
    });
}

// grab character images
// fetch(charImgUrl)
//     .then((resp) => resp.json())
//     .then((charData) => renderCharImg(charData.character.image.medium));

// function renderCharImg(char) {
//     const div = document.querySelector('div');
//     char.forEach(charImg => {
//       const img = document.createElement('img');
//       img.src = charImg;
//       img.innerHTML = charImg.name;
//       div.append(img);
//     });
// }
