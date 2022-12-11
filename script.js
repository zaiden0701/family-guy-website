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
        const newDiv = document.createElement('div')
        newDiv.setAttribute('id','profile-text')
        newDiv.innerHTML = `<h2> ${profileImg.maincharacter.name} </h2>
        <img src='${profileImg.maincharacter.url}' id='profile-img' />
        <p> ${profileImg.maincharacter.born} </p>
        <p> ${profileImg.maincharacter.occupation} </p>
        <p> ${profileImg.maincharacter.height} </p>
        <p> ${profileImg.maincharacter.voice} </p>
        <button id='likeButton'> Click if you like ${profileImg.maincharacter.name} ❤️ </button>
        <ul id='likes'></ul>`
        div2.append(newDiv)
      })
}

//character card dropdown (change event)

// const select = document.querySelector('select')
// select.addEventListener('change', (e) => {
//     let target = e.target.value

// })
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
const likes = document.getElementById('likes')
const likeButton = document.getElementById('likeButton')

// likeButton.addEventListener('click', (e) => {
//     likeButton.textContent = 'Click'
// })

// likeButton.addEventListener('click', (e) => {
//     const likedMsg = document.createElement('li')
//     likedMsg.textContent = `Thanks for the like!`
//     likes.appendChild(likedMsg)
// })

//comment
const commentForm = document.querySelector('#comment-form')
const commentLog = document.querySelector('#comment-log')

commentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const comment = document.createElement('li')
    comment.innerText = e.target[0].value
    commentLog.appendChild(comment)
    commentForm.reset()
})