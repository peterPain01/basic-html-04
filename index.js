const progress = document.querySelector('.options__progress')
const optionsItem = document.querySelectorAll('.options__title--item')

optionsItem.forEach((item, index) => { 
    item.addEventListener('click', () => { 
        progress.value = ((index + 1)) * 33
    })
})