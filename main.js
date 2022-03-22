const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const btn5 = document.querySelector('.btn5')
const modal = document.querySelector('.modal')
const h1 = document.querySelector('h1')
btn1.onclick = () =>{
    modal.remove()
}
btn2.onclick = () =>{
    modal.style.backgroundColor = 'blue'
}
btn3.onclick = () =>{
    modal.classList.toggle('modal1')
}
btn4.onclick = () =>{
    h1.style.color = 'red'
}
btn5.onclick = () =>{
    h1.innerHTML = 'Technology school'
}