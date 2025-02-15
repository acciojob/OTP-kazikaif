//your JS code here. If required.
 const inputs = document.querySelectorAll('.code');

    inputs.forEach((input, index) => {
      // Move focus to next field on input
      input.addEventListener('input', (e) => {
        if (e.target.value.length === 1 && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });

      // Handle backspace: clear the current field or move to previous if empty
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
          if (input.value === '' && index > 0) {
            inputs[index - 1].focus();
          } else {
            input.value = '';
          }
          e.preventDefault();
        }
      });
    });