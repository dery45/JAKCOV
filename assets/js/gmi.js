var value = {};
var select_bulan_gmi = document.getElementById("select_bulan_gmi");
var tampil_data_gmi = document.getElementById("tampil_data_gmi");
var iframe_gmi = document.getElementsByClassName('iframe-gmi')[0];

select_bulan_gmi.onchange = function(evt){
    value.select_bulan_gmi = evt.target.value
}
// ... 

function updateMapGMI() {
  var url = 'GMI' + '-' + value.select_bulan_gmi + '.html';
  iframe_gmi.src = url;
  console.log(url);
  console.log(value);
}

tampil_data_gmi.onclick = function(evt) {
    updateMapGMI();
}