function Toggle() {
    let navbar = document.querySelector('.links-wrapper');
    navbar.classList.toggle('active');

}

let navbar = document.querySelector('.links-wrapper');
document.querySelectorAll('.link').forEach(n => n.addEventListener('click', () =>{
    navbar.classList.remove('active');
}));

let btn = document.getElementById('email-btn');
let form = document.getElementById('form');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    form.classList.toggle('show');
})


let date = new Date();
let year = date.getFullYear();
let full_year = document.getElementById("year");
full_year.innerHTML = year;


let toggle = document.getElementById('toggle-btn');
let bt = document.getElementById('bt');
let cross = document.getElementById('cross');
cross.style.display = 'none';
toggle.addEventListener('click', (e) => {
    e.preventDefault();
    if (cross.style.display === 'none') {
        cross.style.display = 'block';
        bt.style.display = 'none';
    } else {
        cross.style.display = 'none';
        bt.style.display = 'block';
    }
})
    

