var select = document.getElementById('language');
var value = select.options[select.selectedIndex].value;
console.log(value); // en
$('#language').val(); // en
var select = document.getElementById('language');
var text = select.options[select.selectedIndex].text;
console.log(text); // English
$('#language :selected').text(); // English