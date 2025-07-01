// отримуємо елементи
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

// кнопки
document.getElementById('add').addEventListener('click', function (){
  const sum = Number(num1.value) + Number(num2.value);
  result.textContent = 'Result: ' + sum;
})

document.getElementById('subtract').addEventListener('click', function (){
  const subtract = Number(num1.value) - Number(num2.value);
  result.textContent = 'Result: ' + subtract;
})

document.getElementById('multiply').addEventListener('click', function (){
  const multiply = Number(num1.value) * Number(num2.value);
  result.textContent = 'Result: ' + multiply;
})

document.getElementById('divide').addEventListener('click', function (){
  if(Number(num2.value) === 0) {
    result.textContent = 'Error: Dividion by zero'
  }else{
    const divide = Number(num1.value) / Number(num2.value);
    result.textContent = 'Result: ' + divide;
  }
});

document.getElementById('clear').addEventListener('click', function () {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('result').textContent = 'Result: ';
})