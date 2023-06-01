const nav = document.getElementById('nav')
const hamburger = document.getElementById('hamburger')
const closeBtn = document.getElementById('close-btn')
const dropBtns = document.querySelectorAll('.drop-btn')
const dropdownContent = document.getElementById('dropdown-content')
const overlay = document.getElementById('overlay')

hamburger.onclick = () => {
    nav.classList.add('active')
    overlay.classList.add('active')
}

closeBtn.onclick = () => nav.classList.remove('active')

dropBtns.forEach(btn => {
    btn.onclick = () => {
        [...dropBtns].filter(e => e !== btn).map(e => e.classList.remove('active'))
        btn.classList.toggle('active')
        overlay.classList.add('active')
    }
})

overlay.onclick = () => {
    nav.classList.remove('active')
    dropBtns.forEach(e => e.classList.remove('active'))
    overlay.classList.remove('active')
}
