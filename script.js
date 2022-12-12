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
}
getProfile()

//render main image
function renderMainImg(main){
    const div1 = document.getElementById('img-container')
    main.forEach(mainImg => {
        const img = document.createElement('img')
        img.setAttribute('id','main-img')
        img.src = mainImg.resolutions.original.url
        img.innerHTML = mainImg.resolutions.original.url
        div1.append(img)
      })
}

//render character photos and facts
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
      })
}

//character dropdown (change event) and likes (click event)
const select = document.querySelector('select')
const description = document.getElementById('result')

// select.addEventListener('change', (e) => {
//     description.innerHTML = ''
//     description.innerHTML = `You chose ${e.target.value}!`
//     console.log(description)
//     const button = document.createElement('button')
//     description.append(button)
//     button.innerHTML = ''
//     button.innerHTML = `Click if you like ❤️ ${e.target.value}`
//     button.addEventListener('click', (event) => {
//         button.textContent = `Thanks for showing love ${event.detail} times!`
//     })
// })

select.addEventListener('change', dropdownMenu)

function dropdownMenu(e){
    description.innerHTML = ''
    description.innerHTML = `You chose ${e.target.value}!`
    console.log(description)
    const button = document.createElement('button')
    description.append(button)
    button.innerHTML = ''
    button.innerHTML = `Click if you like ❤️ ${e.target.value}`
    button.addEventListener('click', (event) => {
        button.textContent = `Thanks for showing love ${event.detail} times!`
    })
}



//comment
const commentForm = document.querySelector('#comment-form')
const commentLog = document.querySelector('#comment-log')

// commentForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const comment = document.createElement('li')
//     comment.innerText = e.target[0].value
//     commentLog.appendChild(comment)
//     commentForm.reset()
// })

commentForm.addEventListener('submit', createComment)

function createComment(e){
    e.preventDefault()
    const comment = document.createElement('li')
    comment.innerText = e.target[0].value
    commentLog.appendChild(comment)
    commentForm.reset()
}

