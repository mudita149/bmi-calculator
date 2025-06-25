const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from refreshing the page

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result'); // Keep this as an element, not a number

  if (isNaN(height) || height <= 0) {
    result.innerHTML = " Please enter a valid height.";
  } else if (isNaN(weight) || weight <= 0) {
    result.innerHTML = " Please enter a valid weight.";
  } else {
    const bmi = (weight / (height * height)) * 10000;
    const bmiRounded = bmi.toFixed(2);

    result.innerHTML = `<span>Your BMI is ${bmiRounded}</strong> </span>`;
  }
});
