var value = {};
var select_bulan = document.getElementById("select_bulan2");
var select_daerah = document.getElementById("select_daerah");
var tampil_data = document.getElementById("tampil_data2");
var iframe = document.getElementsByClassName('iframe2')[0];

select_bulan.onchange = function(evt){
  value.select_bulan = evt.target.value
}

select_daerah.onchange = function(evt){
  value.select_daerah = evt.target.value
}
// ... 

function updateMap() {
  var url = value.select_daerah + '-' + value.select_bulan + '.html';
  iframe.src = url;
  console.log(url);
  console.log(value);
}

tampil_data2.onclick = function(evt) {
  updateMap();
}



