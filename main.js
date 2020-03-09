const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]

passwords.forEach((password, index) => {
    passwords[index] = password.toLowerCase();
    console.log[index];
})
const showMessage = (e) => {
    const input = e.target.value.toLowerCase();
    passwords.forEach((password, i) => {
        document.querySelector('div').textContent = messages[i];
    })
}

input.addEventListener("input", showMessage)



