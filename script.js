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
    .then((data) => renderProfile(data))
    // .then((data) => renderCharacterDescription(data))
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
    const div2 = document.getElementById('card')
    profile.forEach(profileImg => {
        const newDiv = document.createElement('div')
        newDiv.setAttribute('id','profile-text')
        newDiv.innerHTML = `<h2> ${profileImg.maincharacter.name} </h2>
        <img src='${profileImg.maincharacter.url}' id='profile-img' />
        <p> ${profileImg.maincharacter.born} </p>
        <p> ${profileImg.maincharacter.occupation} </p>
        <p> ${profileImg.maincharacter.height} </p>
        <p> ${profileImg.maincharacter.voice} </p>`
        div2.append(newDiv)
        //desc

      })
}

//character card dropdown (change event)
const select = document.querySelector('select')
const description = document.getElementById('result')
console.log(select)
console.log(description)


select.addEventListener('change', (e) => {
    description.innerHTML = ''
    description.innerHTML = `You chose ${e.target.value}!`
    console.log(description)
    //desc 
    // function renderCharacterDescription(jsonDescription){
    //     jsonDescription.forEach(jsonObject => {
    //         jsonObject.find()
    //         const newDesc = document.createElement('p')
    //         newDesc.setAttribute('id','dropdown')
    //         newDesc.innerHTML = jsonObject.maincharacter.description
    //         description.append(newDesc)
    //     })
    // }
    //button
    const button = document.createElement('button')
    description.append(button)
    button.innerHTML = ''
    button.innerHTML = `Click if you like ❤️ ${e.target.value}`
    button.addEventListener('click', (event) => {
        button.textContent = `Thanks for showing love ${event.detail} times!`
    })
})

// select.addEventListener('change', (e) => {
//     const newDesc = document.createElement('li')
//     description.append(newDesc)
//     newDesc.innerText = `You chose ${e.target.value}!`
//     console.log(newDesc)
// })

//liking 
// const likes = document.getElementById('likes')
// const likeButton = document.getElementById('likeButton')

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