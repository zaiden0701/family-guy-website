//DOM content loaded event
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded")
  })

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

const getProfile = () => {
    fetch('http://localhost:3000/profile')
    .then((resp) => (resp.json()))
    .then((data) => {
        console.log(data)
        renderProfile(data)
    })
}
getProfile()

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

function renderProfile(profile){
    const div2 = document.getElementById('result')
    profile.forEach(profileImg => {
        //img
        const img2 = document.createElement('img')
        img2.setAttribute('id','profile-img')
        img2.src = profileImg.maincharacter.url
        img2.innerHTML = profileImg.maincharacter.url
        div2.append(img2)
}

//character card dropdown (change event)

// const select = document.querySelector('select')
// select.addEventListener('change', renderProfile)

// function renderProfile(e){
//     let event = e.target.value
//     const name = 
//     console.log(name)
    // e.forEach(profileChar => {
    //     name.innerHTML = profileChar.name
    // })
// }

// function filterChar(e) {
//     let name = e.target.value
//     let filteredChar = chars.filter((char) => {
//         return char[0] === name
//     })
//     console.log(filteredChar)
//     div2.innerHTML = 'whoa'
// }

//liking 
const emptyHeart = '♡'
const fullHeart = '♥'