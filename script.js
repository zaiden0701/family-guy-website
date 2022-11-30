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
function renderMainImg(main){
    const div1 = document.getElementById('img-container')
    main.forEach(mainImg => {
        const img = document.createElement('img')
        img.src = mainImg.resolutions.original.url
        img.innerHTML = mainImg.resolutions.original.url
        div1.append(img)
      })
}

//render character images
// function renderCastImg(cast){
//     const div2 = document.getElementsByClassName('result')
//     cast.forEach(charImg => {
//         const img = document.createElement('img')
//         img.src = charImg.character.image.medium
//         img.innerHTML = charImg.character.image.medium
//         div2.append(img)
//       })
// }

//character card dropdown (change event)
const select = document.querySelector('select')
select.addEventListener('change', filterChar)

// function filterChar(e) {
//     let name = e.target.value
//     let filteredChar = chars.filter((char) => {
//         return char[0] === name
//     })
//     console.log(filteredChar)
//     div.innerHTML = ''
// }
