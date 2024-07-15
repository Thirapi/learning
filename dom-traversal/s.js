const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
    if(e.target.className == 'close'){
        const card = e.target.parentElement;
        card.remove();
    }
})