document.querySelector('.c-hamburger').addEventListener('click', function (event) {
    event.preventDefault();
    if (this.classList.contains('is-active')) {
        this.classList.remove('is-active');
        document.querySelector('.nav-list').classList.remove('nav-active');
        $(document.querySelector('.nav-active')).fadeOut()
    }
    else {
        this.classList.add('is-active');
        document.querySelector('.nav-list').classList.add('nav-active');
        $(document.querySelector('.nav-active')).fadeIn()
    }
})

document.querySelector('.nav-list').addEventListener('click', () => {
    document.querySelector('.c-hamburger').classList.remove('is-active');
    $(document.querySelector('.nav-active')).fadeOut()
})