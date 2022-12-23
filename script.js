// DOM Selection
// Tag
// Class
// Id
// const title = document.getElementById('title');
// const title = document.getElementsByClassName('title');
// const title = document.querySelector('#');
// const title = document.querySelectorAll('.paragraph');

// title.forEach(t => {
//     t.innerHTML = "maulana yasya"
// })

// DOM Modification
// Adding Element
// const body = document.body;
// body.append('new element')

// Creating Element
// const body = document.body;
// const div = document.createElement('div')
// const divDua = document.createElement('div')

// div.innerHTML = "<h1>Yasya Indra</h1>"
// divDua.textContent = "<h1>Yasya Indra</h1>"

// body.append(div)
// body.append(divDua)

// Modifiying Element Text
// div.innerHTML = "Yasya Indra"
// div.textContent = "Maulana"
// body.append(div)

// Removing Element
// const p = document.querySelectorAll('.paragraph');
// const content = document.getElementById('content');
// content.remove();

// Modifying Element Attribute
// const heading = document.querySelector('h1')
// const id = heading.getAttribute('style') 
// const id = heading.setAttribute('style','color:red') // undefined karena tidak mengembalikan nilai apapun
// console.log(id);

// Traversering DOM
// walking or navigating the DOM with parent, child, and sibling properties

// Parent Node
// const h = document.getElementById('title')
// const ul = document.querySelector('ul')
// console.log(ul.parentNode)
// const li = document.querySelectorAll('li')
// console.log(li[0].nextElementSibling.innerHTML)

// const heading = document.querySelector('h1')
// const container = document.getElementById('container')

// console.log(container.childNodes)

// console.log(heading.previousSibling)
// console.log(heading.previousSibling)

// Event Listeners
// function gantiWarna(){
//     const text = document.querySelector('#text')
//     text.setAttribute('style','color:red')
// }

// function masukanHuruf(val){
//     const heading = document.querySelector('#result')
//     heading.append(val)
// }

// const btn = document.querySelectorAll('button')
// const h = document.querySelector('#title')
// const body = document.body;

// btn.forEach(b => {
//     b.addEventListener('click', () => {
//         body.classList.toggle('light')
//     })
// })

// const box = document.querySelector('.box-model')

// box.addEventListener('mouseleave', () => {
//     box.style.backgroundColor = 'white'
// })

// box.addEventListener('mouseenter', () => {
//     box.style.backgroundColor = 'red';
// })

// Event Propagation
// const btn = document.querySelector('button')

// window.addEventListener('click',(e) => {
//     console.log('Window')
// }, false)

// document.addEventListener('click', (e) => {

//     console.log('Document')
// }, false)

// document.querySelector('.div2').addEventListener('click', (e) => {
//     console.log('DIV 2')
// }, {once:true})

// document.querySelector('.div1').addEventListener('click', () => {
//     console.log('DIV 1')
// }, false)

// btn.addEventListener('click', (e) => {
//     console.log(e.target.innerHTML = "Clicked!")
// }, false)

// Event Delegation
// const items = document.querySelectorAll('.item')


// items.forEach( item => {
//     item.addEventListener('click', (e) => {
//         item.classList.toggle('item-active')
//         console.log(e.target.matches('li'))
//     })
// } )

// document.querySelector('.flex').addEventListener('click', (e) => {
//     console.log(e.target.innerHTML + ' is clicked')
// })

// const flex = document.querySelector('.flex')
// const newSport = document.createElement('div')

// newSport.innerHTML = 'Takraw'
// newSport.setAttribute('class','item')
// flex.append(newSport)
// const item = document.querySelector('div')
// const flexClass = 'flex'

// document.querySelector('.btn').addEventListener('click', () => {
//     const flex = document.querySelector('.flex')
//     console.log(flex.classList.toggle('hidden'))
// })