const herosection = document.querySelector('.herosection');
const navItem = document.querySelectorAll('.nav-item');

// herosection.style.display = 'none';

navItem.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('active');
        item.classList.remove('active');
    })
})
