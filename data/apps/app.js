var info = [];
var info2 = [];
var labels = {};
var newData = [];
var minVal = [];
var maxVal = [];

var fecha_separada;
var hora_separada;
var vrms_r;
var vrms_s;
var vrms_t;
var irms_r;
var irms_s;
var irms_t;
var prms_r;
var prms_s;
var prms_t;
var energ_r;
var energ_s;
var energ_t;
var energ_total;
var fp_r;
var fp_s;
var fp_t;

var flag = 0;


/* ---------- Funcion para la creacion y descarga del archivo .csv ---------- */
var download = function (info2) {
  
  d = new Date();

  // Creating a Blob for having a csv file format
  // and passing the data with type
  const blob = new Blob([info2], { type: 'text/csv' });

  // Creating an object for downloading url
  const url = window.URL.createObjectURL(blob)

  // Creating an anchor(a) tag of HTML
  const a = document.createElement('a')

  // Passing the blob downloading url
  a.setAttribute('href', url)

  // Creation of date variables
  Year = d.getFullYear()    
  Month = ("0" + (d.getMonth() + 1)).slice(-2)
  date = ("0" + d.getDate()).slice(-2)
  hours = ((d.getHours()<10?'0':'') + d.getHours())
  minutes = ((d.getMinutes()<10?'0':'') + d.getMinutes())
  seconds = ((d.getSeconds()<10?'0':'') + d.getSeconds())

  // Generating the name of the .csv file
  nombreArchivo = "Tesis_Claudio_Gereniere_"+ date + "_" + Month + "_" + Year + "_" + hours + "hs" + "-" + minutes + "m" + "-" + seconds + "s" +".csv"

  // Setting the anchor tag attribute for downloading
  // and passing the download file name
  a.setAttribute('download', nombreArchivo);

  // Performing a download with click
  a.click()
} 

var downloadButton = document.getElementById("action");

downloadButton.addEventListener("click", async function() {

  if (info2.length==0) {
    window.alert("No se puede descargar el archivo,\nporque todavia no se han registrado datos!");
  } else {
    download(info2)
  }
});

socket = new WebSocket("ws:/" + "/" + location.host + ":81");

socket.onopen = function(e) { console.log("[socket] socket.onopen ");

};

socket.onerror = function(e) { console.log("[socket] socket.onerror "); };


/* ---------- Evento al momento de recibir datos de la terminal de arduino ---------- */
socket.onmessage = function(e) {
  console.log("[socket] " + e.data);
  
  /* ---------- Agrega los caracteres especiales ("/", ":" y ","),
  al string recibido por la terminal arduino ---------- */
  agregarCaracter = (cadena, caracter, pasos) => {
    let cadenaConCaracteres = "";
      longitudCadena = cadena.length;
    for (let i = 0; i < longitudCadena; i += pasos) {
      if (i + pasos < longitudCadena) {
        cadenaConCaracteres += cadena.substring(i, i + pasos) + caracter;
      } else {
        cadenaConCaracteres += cadena.substring(i, longitudCadena);
      }
    }
    return cadenaConCaracteres;
  }
  
  fecha_separada = agregarCaracter((e.data.slice(0, 6)), "/", 2);;
  hora_separada = agregarCaracter((e.data.slice(6, 12)), ":", 2);
  vrms_r = agregarCaracter((e.data.slice(12, 16)), ".", 3);
  vrms_s = agregarCaracter((e.data.slice(16, 20)), ".", 3);
  vrms_t = agregarCaracter((e.data.slice(20, 24)), ".", 3);
  irms_r = agregarCaracter((e.data.slice(24, 28)), ".", 3);
  irms_s = agregarCaracter((e.data.slice(28, 32)), ".", 3);
  irms_t = agregarCaracter((e.data.slice(32, 36)), ".", 3);
  prms_r = agregarCaracter((e.data.slice(36, 40)), ".", 3);
  prms_s = agregarCaracter((e.data.slice(40, 44)), ".", 3);
  prms_t = agregarCaracter((e.data.slice(44, 48)), ".", 3);
  energ_r = agregarCaracter((e.data.slice(48, 56)), ".", 5);
  energ_s = agregarCaracter((e.data.slice(56, 64)), ".", 5);
  energ_t = agregarCaracter((e.data.slice(64, 72)), ".", 5);
  energ_total = agregarCaracter((e.data.slice(72, 80)), ".", 5);
  fp_r = agregarCaracter((e.data.slice(80, 83)), ".", 3);
  fp_s = agregarCaracter((e.data.slice(83, 86)), ".", 3);
  fp_t = agregarCaracter((e.data.slice(86, 89)), ".", 3);

  newData = [fecha_separada, hora_separada, vrms_r, vrms_s, vrms_t, irms_r, irms_s, irms_t, prms_r, prms_s, prms_t, energ_r, energ_s, energ_t, energ_total, fp_r, fp_s, fp_t];
  info.unshift(newData);

  labels = {
    "fields": ["Fecha", "Hora", "VRms-R", "VRms-S", "VRms-T", "IRms-R", "IRms-S", "IRms-T", "KW-R", "KW-S", "KW-T", "Energia-R", "Energia-S", "Energia-T", "Energ-Total", "Factor-Pot-R", "Factor-Pot-S", "Factor-Pot-T"],
    "data": info
  };
  /* ---------- Cambia el "." por "," ---------- */
  var vrms_rC = vrms_r.replace('.', ',');
  var vrms_sC = vrms_s.replace('.', ',');
  var vrms_tC = vrms_t.replace('.', ',');
  var irms_rC = irms_r.replace('.', ',');
  var irms_sC = irms_s.replace('.', ',');
  var irms_tC = irms_t.replace('.', ',');
  var prms_rC = prms_r.replace('.', ',');
  var prms_sC = prms_s.replace('.', ',');
  var prms_tC = prms_t.replace('.', ',');
  var energ_rC = energ_r.replace('.', ',');
  var energ_sC = energ_s.replace('.', ',');
  var energ_tC = energ_t.replace('.', ',');
  var energ_totalC = energ_total.replace('.', ',');
  var fp_rC = fp_r.replace('.', ',');
  var fp_sC = fp_s.replace('.', ',');
  var fp_tC = fp_t.replace('.', ',');

  /* ---------- Inserta el valor de las variables en el html de index.html ---------- */

  document.getElementById("Fecha").innerHTML = fecha_separada;
  document.getElementById("Hora").innerHTML = hora_separada;
  document.getElementById("VRms_R").innerHTML = vrms_rC;
  document.getElementById("VRms_S").innerHTML = vrms_sC;
  document.getElementById("VRms_T").innerHTML = vrms_tC;
  document.getElementById("IRms_R").innerHTML = irms_rC;
  document.getElementById("IRms_S").innerHTML = irms_sC;
  document.getElementById("IRms_T").innerHTML = irms_tC;
  document.getElementById("PRms_R").innerHTML = prms_rC;
  document.getElementById("PRms_S").innerHTML = prms_sC;
  document.getElementById("PRms_T").innerHTML = prms_tC;
  document.getElementById("Energia_R").innerHTML = energ_rC;
  document.getElementById("Energia_S").innerHTML = energ_sC;
  document.getElementById("Energia_T").innerHTML = energ_tC;
  document.getElementById("Energia_Total").innerHTML = energ_totalC;
  document.getElementById("FP_R").innerHTML = fp_rC;
  document.getElementById("FP_S").innerHTML = fp_sC;
  document.getElementById("FP_T").innerHTML = fp_tC;

  /* ---------- Se asignan los Min y Max, y se insertan en index.html en la grilla Estadisticas---------- */
  var ultimaFila = info[info.length - 1];

  if (flag==0) {
    for (let i = 2; i < newData.length; i++) {
      minLab = labels.fields[i] + '-Min';
      maxLab = labels.fields[i] + '-Max';
      document.getElementById(minLab).innerHTML = newData[i];
      document.getElementById(maxLab).innerHTML = newData[i];
    }
    flag = 1;
  } else {
    for (let i = 2; i < newData.length; i++) {
      minLab = labels.fields[i] + '-Min';
      maxLab = labels.fields[i] + '-Max';
      if (newData[i]<ultimaFila[i]) {
        minVal = newData[i];
        maxVal = ultimaFila[i];
      }
      if (newData[i]>ultimaFila[i]) {
        maxVal = newData[i];
        minVal = ultimaFila[i];
      }
      document.getElementById(minLab).innerHTML = minVal;
      document.getElementById(maxLab).innerHTML = maxVal;  
    }
  }

  /* ---------- Alarmas ---------- */

  
  /* ---------- Configuracion de la libreria Papaparse 
  ( Para el formato e insercion de datos del archivo .csv) ---------- */


  if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    info2 = Papa.unparse(labels, {
      download: true,
      header: true,
      delimiter: ",",
      newline: "\r\n",
    });
    } else {
    info2 = Papa.unparse(labels, {
      download: true,
      header: true,
      delimiter: ";",
      newline: "\r\n",
    });
  }
}