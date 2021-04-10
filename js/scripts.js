/* nav-menu */
document.querySelector('.c-hamburger').addEventListener('click', function (event) {
   /* event.preventDefault();*/
    if (this.classList.contains('is-active')) {
        this.classList.remove('is-active');
        document.querySelector('.nav-list').classList.remove('nav-active');
        $(document.querySelector('.nav-active')).fadeOut();
        document.body.classList.remove('stop-scrolling');
    }
    else {

        this.classList.add('is-active');
        document.body.classList.add('stop-scrolling');
        document.querySelector('.nav-list').classList.add('nav-active');
        $(document.querySelector('.nav-active')).fadeIn()
    }
})

document.querySelector('.nav-list').addEventListener('click', () => {
    document.querySelector('.c-hamburger').classList.remove('is-active');
    $(document.querySelector('.nav-active')).fadeOut()
})

////////////////
if(document.getElementById('button-back')){
    document.getElementById('button-back').addEventListener('click', goBack);
}

function goBack() {
    window.history.back();
}