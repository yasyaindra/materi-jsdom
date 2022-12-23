// const judul = document.querySelector('h1')
// let nama = localStorage.getItem('nama')

// if(!nama){
//     let nama = prompt('Masukkan nama: ')
//     localStorage.setItem('nama',nama)
// }

// const gantiNama = (e) => {
//     let nama = prompt('Masukkan nama: ')
//     localStorage.setItem('nama',nama)
//     e.preventDefault()
// }

// const hapusNama = (e) => {
//     localStorage.removeItem('nama')
//     e.preventDefault()
// }
// judul.innerHTML = `Halo, ${nama}!`

// Dark Mode

const toggle = document.querySelector('.toggle') // tangkap tombol event
let theme = localStorage.getItem('theme'); // ambil web storage

if(!theme){ // pengkondisian jika theme bukan light mode maka isi web storage dengan light mode
    localStorage.setItem('theme',  'light')
}


//  buat dua fungsi darkmode dan light mode dengan masing masing .classlist.remove & .classlist.add
const darkMode = () => {
    document.body.classList.add('dark-mode');
    toggle.innerHTML = "Light Mode"
    localStorage.setItem('theme',  'dark')
}

const lightMode = () => {
    document.body.classList.remove('dark-mode');
    toggle.innerHTML = "Dark Mode"
    localStorage.setItem('theme',  'light')
}

if(theme === 'dark'){
    darkMode()
}

toggle.addEventListener('click', (e) => {
    theme = localStorage.getItem('theme');

    if(theme === 'light'){
        darkMode()
    } else {
        lightMode()
    }
    e.preventDefault()
})