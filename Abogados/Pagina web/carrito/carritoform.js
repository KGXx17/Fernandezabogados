// Llama a updateProgress() cuando se carga la página inicialmente
window.addEventListener('load', updateProgress);

const nextButton = document.querySelector('.btn-next');
const prevButton = document.querySelector('.btn-prev');
const submitButton = document.querySelector('.btn-submit'); // Añadimos el botón de submit
const steps = document.querySelectorAll('.step');
const form_steps = document.querySelectorAll('.form-step');
const totalSteps = 4; // Actualizamos el número total de pasos a 5
let active = 1;

nextButton.addEventListener('click', () => {
    active++;
    if (active > totalSteps) { // Verificamos si hemos alcanzado el último paso
        active = totalSteps;
    }
    updateProgress();
});

prevButton.addEventListener('click', () => {
    active--;
    if (active < 1) {
        active = 1;
    }
    updateProgress();
});

function updateProgress() {
    console.log('steps.length =>' + steps.length);
    console.log('active =>' + active);

    // toggle .active class for each list item
    steps.forEach((step, i) => {
        if (i == (active - 1)) {
            step.classList.add('active');
            form_steps[i].classList.add('active');
            console.log('i =>' + i);
        } else {
            step.classList.remove('active');
            form_steps[i].classList.remove('active');
        }
    });
    // enable or disable prev and next buttons
    // Habilitar o deshabilitar botones de siguiente y anterior
    if (active === 1) {
        prevButton.disabled = true;
    } else if (active === totalSteps) { // Verificamos si estamos en el último paso
        nextButton.style.display = "none"; // Ocultamos el botón Next
        submitButton.style.display = "block"; // Mostramos el botón Submit
    } else {
        prevButton.disabled = false;
        nextButton.style.display = "block"; // Aseguramos que el botón Next esté visible
        submitButton.style.display = "none"; // Aseguramos que el botón Submit esté oculto
    }
}