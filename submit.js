const steps = document.querySelectorAll('.step');
let currentStep = 0;

function showStep(stepIndex) {
  steps.forEach(step => step.style.display = 'none');
  steps[stepIndex].style.display = 'block';
}

showStep(currentStep);

const nextStepBtn = document.querySelector('.next-step');
nextStepBtn.addEventListener('click', () => {
  if (validateStep(currentStep)) {
    currentStep++;
    showStep(currentStep);
  }
});

const prevStepBtn = document.querySelector('.prev-step');
prevStepBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

const submitFormBtn = document.querySelector('.submit-form');
submitFormBtn.addEventListener('click', () => {
  if (validateStep(currentStep)) {
    // Submit the form data here
    alert('Form submitted successfully!');
  }
});

function validateStep(stepIndex) {
  // Implement your validation logic here
  // Return true if valid, false otherwise
  return true;
}