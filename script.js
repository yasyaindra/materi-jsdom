const light = document.querySelector('.light');
const theme = localStorage.getItem('theme')

if(!theme){
    localStorage.setItem('theme','light')
}

const darkMode = () => {
    document.body.classList.add('dark-mode');
    light.innerHTML = 'Light Mode'
    localStorage.setItem('theme','dark')
}

const lightMode = () => {
    document.body.classList.remove('dark-mode');
    light.innerHTML = 'Dark Mode'
    localStorage.setItem('theme','light')
}

if(theme === 'dark'){
    darkMode()
}

light.addEventListener('click', () => {
    const theme = localStorage.getItem('theme')

    if(theme === 'light'){
        darkMode()
    } else {
        lightMode()
    }
})