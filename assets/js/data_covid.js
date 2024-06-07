var value = {};
var select_bulan = document.getElementById("select_bulan_data");
var select_status = document.getElementById("select_status_data");
var tampil_data = document.getElementById("tampil_data");
var iframe = document.getElementsByClassName('iframedata')[0];

select_bulan.onchange = function(evt){
  value.select_bulan = evt.target.value
}

select_status.onchange = function(evt){
  value.select_status = evt.target.value
}
// ... 

function updateMap() {
  var url = value.select_bulan + '_' + value.select_status + '.html';
  iframe.src = url;
  console.log(url);
  console.log(value);
}

tampil_data.onclick = function(evt) {
  updateMap();
}