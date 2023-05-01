//your JS code here. If required.
const colorSelect = document.getElementById('colorSelect');
const removeColor = document.getElementById('removeColorButton');

removeColor.addEventListener("click", function() {
    const selectedOption = colorSelect.options[colorSelect.selectedIndex];
    const selectColor = selectedOption.value;

    // remove the end child 
    colorSelect.removeChild(selectedOption);

});