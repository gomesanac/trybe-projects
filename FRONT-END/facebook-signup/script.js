const datePicker = document.querySelector('#datepicker').DatePickerX;
datePicker.init({ format: 'dd/mm/yyyy' });
datePicker.setValue('14/03/1995');

const loginButton = document.querySelector('#button-login');

function loginAlert() {
  const loginInput = document.querySelector('#user-email-phone');
  alert(`${loginInput.value}`);
}

loginButton.addEventListener('click', loginAlert);

const radioButtons = document.querySelectorAll('.gender');
const buttonCreate = document.querySelector('#facebook-register');

function verificaDados() {
  const firstName = document.querySelector('#firstname').value;
  let selectGender = '';
  for (let i = 0; i < radioButtons.length; i += 1) {
    if (radioButtons[i].checked) {
      selectGender = radioButtons[i].value;
    }
  }
  alert(`${firstName} - ${selectGender}`);
}

buttonCreate.addEventListener('click', verificaDados);
