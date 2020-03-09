const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]

const showMessage = (e) => {
 passwords.forEach((item, i) => {
  if (item.toLowerCase() === e.target.value.toLowerCase()) {
   document.querySelector('div').textContent = messages[i];
  }
 })
}

input.addEventListener("input", showMessage)



