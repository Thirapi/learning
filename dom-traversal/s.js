const cross = document.querySelectorAll('.close'); 

cross.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
    })
})