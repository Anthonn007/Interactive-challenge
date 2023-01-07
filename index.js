let btnSubm = document.getElementById('submit');
let msg1 = document.getElementById('first-box');
let msg2 = document.getElementById('second-box');
let closeW = document.getElementById('closeW');
let btns = document.querySelectorAll('.btnSelect');
let selected = document.getElementById('selected');


btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log(btn.innerHTML)
        selected.innerHTML = btn.innerHTML;
    })
})

function send () {
    msg1.style.display = 'none';
    msg2.style.display = 'block';
}

function close (){
    msg1.style.display = 'block';
    msg2.style.display = 'none';
    location.href = location.href;
}

btnSubm.addEventListener('click', send);
closeW.addEventListener('click', close);
