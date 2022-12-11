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
        const label = document.createElement('div')
        label.setAttribute('id','profile-text')
        label.innerHTML = `<h2> ${profileImg.maincharacter.name} </h2>
        <img src='${profileImg.maincharacter.url}' id='profile-img' />
        <p> ${profileImg.maincharacter.born} </p>
        <p> ${profileImg.maincharacter.occupation} </p>
        <p> ${profileImg.maincharacter.height} </p>
        <p> ${profileImg.maincharacter.voice} </p>
        <button class='like-btn'> Click if you like ${profileImg.maincharacter.name} ❤️ </button>
        <ul id='likes'> </ul>`
        div2.append(label)
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
const likeBtn = document.getElementsByClassName('like-btn')
likeBtn.addEventListener('click', (likes) => {
    let likedMsg = document.createElement('li')
    likedMsg.textContent = `Thanks for the like!`
    likes.append(likedMsg)
})

//comment
submit.addEventListener('click', (e) => {
    e.preventDefault()
    const comment = document.createElement('li')
    comments.append(comment)
    comment.textContent(document.querySelector('#comment-input').value)
    comment_form.reset()
})