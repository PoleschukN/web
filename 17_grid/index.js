window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('burger__is-active')
    });
});
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#close-burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('burger__is-active')
    });
});