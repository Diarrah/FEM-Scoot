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