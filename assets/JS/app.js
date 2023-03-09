
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

document.getElementById('length').addEventListener('change', charLength)


function generatePassword(length) {
  var password = "";
  var allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  
  for (var i = 0; i < length; i++) {
    var randomNum = Math.floor(Math.random() * allowedChars.length);
    password += String.fromCharCode(allowedChars.charCodeAt(randomNum));
  }
  
  return password;
}

// Example usage: generate a 12-character password
var password = generatePassword(12);
console.log(password);



const uppercaseCheckbox = document.getElementById('uppercase');
      const passwordInput = document.getElementById('password-input');

      uppercaseCheckbox.addEventListener('change', function() {
        if (uppercaseCheckbox.checked) {
          passwordInput.addEventListener('input', function() {
            const uppercasePassword = passwordInput.value.toUpperCase();
            passwordInput.value = uppercasePassword.replace(/[^A-Z]/g, '');
          });
        } else {
          passwordInput.removeEventListener('input');
        }
      });


