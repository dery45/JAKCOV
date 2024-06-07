var value22 = {};
var select_bulan22 = document.getElementById("select_bulan2");
var select_status22 = document.getElementById("select_status2");
var tampil_data22 = document.getElementById("tampil_data2");
var iframe22 = document.getElementById('iframeplot')[0];

select_bulan.onchange = function(evt){
  value22.select_bulan22 = evt.target.value22
}

select_status.onchange = function(evt){
  value22.select_status22 = evt.target.value22
}
// ... 

function updateMap22() {
  var url = value22.select_status22 + '-' + value22.select_bulan22 + '.html';
  iframe22.src = url;
  console.log(url);
  console.log(value22);
}

tampil_data.onclick = function(evt) {
  updateMap22();
}