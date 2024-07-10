const btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    document.body.classList.toggle('bg-dark');
    
});

const randColor = document.createElement('h1');
const h1Value = document.createTextNode('Randomize Color');

randColor.appendChild(h1Value);
randColor.setAttribute('class', 'font');

btn.after(randColor);

randColor.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

const sRed = document.querySelector('input[name=sRed]');
const sGreen = document.querySelector('input[name=sGreen]');
const sBlue = document.querySelector('input[name=sBlue]');
const box = document.getElementById('box');

sRed.addEventListener('input', function(){
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    box.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sGreen.addEventListener('input', function(){
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    box.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sBlue.addEventListener('input', function(){
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    box.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

document.body.addEventListener('mousemove', function(event){
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPos +',100,'+ yPos +')';
});