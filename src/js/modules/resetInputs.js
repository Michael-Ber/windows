
function resetInputs() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
        if(input.getAttribute('type') == 'checkbox') {
            input.checked = false;
        }
    });
}
export default resetInputs;