let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    formSearch.classList.remove('active');
}

let formSearch = document.querySelector('.form-search');

document.querySelector('#search-btn').onclick = () => {
    formSearch.classList.toggle('active');
    navbar.classList.remove('active');
}

let section = document.querySelectorAll('section');
let nav = document.querySelectorAll('div nav a');

window.onscroll = () => {
   
    section.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')
        if ( top >= offset && top < offset + height) {
            nav.forEach(link => {
                link.classList.remove('active');
                document.querySelector("div nav a[href*=" + id + "]").classList.add('active')
            })
        }
    })
    navbar.classList.remove('active');
    formSearch.classList.remove('active');
}

function handleGetFormData() {
    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;
  
    return {
        name,
        city,
        email,
        zipCode,
        status
    };
}

function isNumber(zipCode) {
    if (isNaN(zipCode)) {
        return false
    } 
    return true
}

function checkboxIsChecked() {
    let status = document.getElementById('status').checked;
    if (status) {
        return true
    }
    return false
}

function validateFormData(objek) {
    if(objek != null && isNumber(objek.zipCode) && checkboxIsChecked()) {
        return true
    }
    return false
}

function submit() {
    let getData = handleGetFormData();
    if (validateFormData(getData) == false) {
        document.getElementById('warning').innerText = "Periksa form anda sekali lagi";
    } else {
        document.getElementById('warning').innerText = "";
    }
}

document.getElementById('submit-form').addEventListener('click', function(event) {
    event.preventDefault();
    submit();
    const formData = handleGetFormData();
    console.log(formData);
});