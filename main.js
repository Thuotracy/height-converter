let meterbtn = document.getElementById('meter');
let feetbtn = document.getElementById('feet');

meterbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input / 3.281 + " Meter";
})

feetbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value; 
    document.getElementById('output').value = input * 3.281 + " Meter";
})