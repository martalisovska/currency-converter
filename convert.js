// отримуємо елементи
const amountInput = document.getElementById('amount');
const currencySelect = document.getElementById('currency');
const convertButton = document.getElementById('convert');
const result = document.getElementById('result');

// Обробка кліку на кнопку
convertButton.addEventListener('click', function() {
  // зчитуємо суму
  const amount = parseFloat(amountInput.value);
  
  // зчитуємо обрану валюту
  const currency = currencySelect.value;

// перевірка значення
  if(isNaN(amount) || amount <= 0) {
    result.textContent = "Please enter valid number.";
    return;
  }

// визначаємо курс
  let rate = 0;
  if (currency === "usd") rate = 0.024;
  else if (currency === "eur") rate = 0.02;
  else if (currency === "pln") rate = 0.086;

// обчислюємо результат
  const converted = (amount * rate).toFixed(2);

// виводимо результат
  result.textContent = `Result: ${converted} ${currency.toUpperCase()}`;
})