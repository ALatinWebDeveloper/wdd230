
const membership = document.querySelectorAll('input[type="radio"]');
let tier = document.querySelectorAll('.membTier');
let message = document.querySelector(".tierMessage");
console.log(tier);

membership.forEach(element => {
    element.addEventListener('change', () => {
        if (element.value == 'np') {

            message.classList.replace('show', 'hidden');
            tier[0].classList.replace('hidden', 'show');

            tier[1].classList.replace('show', 'hidden');
            tier[2].classList.replace('show', 'hidden');
            tier[3].classList.replace('show', 'hidden');

        } else if (element.value == 'bronze') {
            
            message.classList.replace('show', 'hidden');
            tier[1].classList.replace('hidden', 'show');

            tier[0].classList.replace('show', 'hidden');
            tier[2].classList.replace('show', 'hidden');
            tier[3].classList.replace('show', 'hidden');

        } else if (element.value == 'silver') {
            
            message.classList.replace('show', 'hidden');
            tier[2].classList.replace('hidden', 'show');

            tier[0].classList.replace('show', 'hidden');
            tier[1].classList.replace('show', 'hidden');
            tier[3].classList.replace('show', 'hidden');

        } else if (element.value == 'gold') {
            
            message.classList.replace('show', 'hidden');
            tier[3].classList.replace('hidden', 'show');

            tier[1].classList.replace('show', 'hidden');
            tier[2].classList.replace('show', 'hidden');
            tier[0].classList.replace('show', 'hidden');
        }
    });
});

