document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    let regex =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    let email = document.getElementById('email')
    
    if (!email.value.match(regex)) {
        document.getElementById('error-img').classList.add('show')
        document.getElementById('error-msg').classList.add('show')
        email.classList.add('error')
    } 

})

document.getElementById("email").addEventListener('click', () => {
    document.getElementById('error-img').classList.remove('show')
    document.getElementById('error-msg').classList.remove('show')
    email.classList.remove('error')
})