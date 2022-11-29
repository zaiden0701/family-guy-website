//fetch data
const getMainImg = () => {
    fetch('http://localhost:3000/images')
    .then((resp) => (resp.json()))
    .then((data) => {
        console.log(data)
        renderMainImg(data)
    })
}
getMainImg()

const getCast = () => {
    fetch('http://localhost:3000/cast')
    .then((resp) => (resp.json()))
    .then((data) => {
        console.log(data)
        renderCastImg(data)
    })
}
getCast()

//render main image
// const renderMainImg = (main) => {

function renderMainImg(main){
    const div = document.querySelector('div');
    main.forEach(mainImg => {
        const img = document.createElement('img');
        img.src = mainImg;
        img.innerHTML = mainImg.resolutions.medium;
        div.append(img);
      });
}

//render character images
const renderCastImg = (cast) => {}