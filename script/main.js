const form = document.querySelector('form');
const formContent = [...form.children]

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formContent.forEach(content => content.classList.add('hidden'))
})