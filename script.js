// Mobile Nav
let menu = document.querySelector('.navbar__mobile'),
    overlay = document.querySelector('.overlay'),
    { body } = document;

menu.addEventListener('click', function() {
    this.classList.toggle('active');
    this.parentElement.children[2].classList.toggle('active'); // This is navbar__links ul
    overlay.classList.toggle('active');

    this.classList.contains('active') ? body.style.overflow = 'hidden' : body.style.overflow = 'visible'; 
})



// Flash when CTA redirect clicked
let ctaRedirect = document.querySelectorAll('.cta--redirect'),
    signUp = document.getElementById('cta').children[0];

ctaRedirect.forEach(button => button.addEventListener('click', () => {
    signUp.classList.add('flash');
    setTimeout(function() { signUp.classList.remove('flash') }, 601)
}))



// FAQ Accordion
let items = document.querySelectorAll('.accordion__item');

items.forEach(item => item.addEventListener('click', function() {
    
    let question = this.children[1],
        arrow = this.children[0].children[1];

    arrow.classList.toggle('active');
    question.classList.toggle('active');

    if (question.style.maxHeight) {
        question.style.maxHeight = null
    } else {
        question.style.maxHeight = this.scrollHeight + 'px';
    } 
}))