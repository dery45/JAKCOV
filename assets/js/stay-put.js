var value1 = {};
var select_bulan1 = document.getElementById("select_bulan");
var tampil_data = document.getElementById("tampil_data");
var iframe1 = document.getElementsByClassName('iframe1')[0];

select_bulan1.onchange = function(evt){
  value1.select_bulan1 = evt.target.value
}
// ... 

function updateMap1() {
  var url = 'Stayput' + '-' + value1.select_bulan1 + '.html';
  iframe1.src = url;
  console.log(url);
  console.log(value1);
}

tampil_data.onclick = function(evt) {
  updateMap1();
}