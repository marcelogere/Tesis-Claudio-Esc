var info = [];
var info2 = [];
var newData = [];

var dataLabels = ["Fecha", "Hora", "VRms", "IRms", "KW", "Factor de Potencia", "Energia", "Energía Total"];

var labels = {
  "fields": ["Fecha", "Hora", "VRms-R", "VRms-S", "VRms-T", "IRms-R", "IRms-S", "IRms-T", "KW-R", "KW-S", "KW-T", "Factor-Pot-R", "Factor-Pot-S", "Factor-Pot-T", "Energia-R", "Energia-S", "Energia-T", "Energ-Total"],
  "data": info
  };

var fecha;
var hora;
var vrms_r;
var vrms_s;
var vrms_t;
var irms_r;
var irms_s;
var irms_t;
var prms_r;
var prms_s;
var prms_t;
var fp_r;
var fp_s;
var fp_t;
var energ_r;
var energ_s;
var energ_t;
var energ_total;

var flag = 0;

var minLab;
var maxLab;
var maxVal;
var minVal;

var d;

export {vrms_r, vrms_s, vrms_t, irms_r, irms_s, irms_t, prms_r, prms_s, prms_t, fp_r, fp_s, fp_t, energ_r, energ_s, energ_t, energ_total}

/* ---------- Creación de la estructura html de #data_section ---------- */
const dataSection = document.querySelector("#data_section");
for (let i = 2; i < dataLabels.length; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  if (i === dataLabels.length-1) {
    for (let j = 0; j < 2; j++) {
      const col = document.createElement('div');
      const box = document.createElement('div');
      if (j === 0) {
        col.classList.add('col-xs-3');
        box.classList.add('box', 'text-left');
        box.textContent = dataLabels[i];
      } else {
        col.classList.add('col-xs-9');
        box.classList.add('box2');
        box.setAttribute('id', dataLabels[i]);
      }
      col.appendChild(box);
      row.appendChild(col);
    }
  } else {
    for (let j = 0; j < 4; j++) {
      const col = document.createElement('div');
      col.classList.add('col-xs-3');
      const box = document.createElement('div');
      if (j === 0) {
        box.classList.add('box', 'text-left');
        box.textContent = dataLabels[i];
      } else {
        box.classList.add('box2');
        box.setAttribute('id', dataLabels[i] + '-' + (j === 1 ? 'R' : j === 2 ? 'S' : 'T'));
      }
      col.appendChild(box);
      row.appendChild(col);
    }
  }
  dataSection.appendChild(row);
}

/* ---------- Creación de la estructura html de #stat-section ---------- */
const statSection = document.querySelector("#stat-section");
for (let i = 2; i < dataLabels.length; i++) {
  var elementStatSection = document.createElement("section");
  elementStatSection.setAttribute('id', dataLabels[i] + '-stat-section');
  elementStatSection.classList.add('element-stat-section');
  if (i === dataLabels.length-1) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 3; j++) {
      const col = document.createElement('div');
      col.classList.add('col-xs-4');
      const box = document.createElement('div');
      if (j === 0) {
        box.classList.add('box', 'text-left');
        box.textContent = dataLabels[i];
      } else {
        box.classList.add('box2');
        box.setAttribute('id', dataLabels[i] + '-' + (j === 1 ? 'Min' : 'Max'));
      }
      col.appendChild(box);
      row.appendChild(col);
      elementStatSection.appendChild(row);
    }
    statSection.appendChild(elementStatSection);
  } else {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let k = 0; k < 3; k++) {
      for (let j = 0; j < 3; j++) {
        const col = document.createElement('div');
        col.classList.add('col-xs-4');
        const box = document.createElement('div');
        if (j === 0) {
          box.classList.add('box', 'text-left');
          box.textContent = dataLabels[i] + (k === 0 ? '-R' : k === 1 ? '-S' : '-T');
        } else {
          box.classList.add('box2');
          box.setAttribute('id', dataLabels[i] + (k === 0 ? '-R' : k === 1 ? '-S' : '-T') + '-' + (j === 1 ? 'Min' : 'Max'));
        }
        col.appendChild(box);
        row.appendChild(col);
        elementStatSection.appendChild(row);
      }
    }
    statSection.appendChild(elementStatSection);
  }
    statSection.appendChild(elementStatSection);
}
/* ---------- Creación de la estructura html de #gauge_section ---------- */
// Obtener el contenedor principal
const gaugeSection = document.getElementById("gauge-section");

// Recorrer los elementos de dataLabels a partir del tercer elemento
for (let i = 2; i < dataLabels.length; i++) {
  
  var elementGaugeSection = document.createElement("section");
  elementGaugeSection.setAttribute('id', dataLabels[i] + '-gauge-section');
  elementGaugeSection.classList.add('element-gauge-section');
  if (i === dataLabels.length-1) {
    var gaugeDiv = document.createElement("div");
    var valueH1 = dataLabels[i];
    gaugeDiv.classList.add('gauges-div');
    var gaugeH1 = document.createElement("h1");
    var previewDiv = document.createElement("div");
    var canvasGauge = document.createElement("canvas");
    gaugeDiv.setAttribute('id', dataLabels[i] + '-gauge');
    gaugeH1.setAttribute('id', dataLabels[i] + '-h1');
    gaugeH1.textContent = valueH1;
    previewDiv.setAttribute('id', dataLabels[i] + '-preview');
    previewDiv.classList.add('prev-val');
    canvasGauge.setAttribute('id', dataLabels[i] + '-canvas');
    gaugeDiv.appendChild(gaugeH1);
    gaugeDiv.appendChild(previewDiv);
    gaugeDiv.appendChild(canvasGauge);
    elementGaugeSection.appendChild(gaugeDiv);
    gaugeSection.appendChild(elementGaugeSection);
  } else {
    for (let j = 0; j < 3; j++) {
      var gaugeDiv = document.createElement("div");
      var valueH1 = dataLabels[i] + (j === 0 ? '-R' : j === 1 ? '-S' : '-T')
      gaugeDiv.classList.add('gauges-div');
      var gaugeH1 = document.createElement("h1");
      var previewDiv = document.createElement("div");
      var canvasGauge = document.createElement("canvas");
      gaugeDiv.setAttribute('id', dataLabels[i] + (j === 0 ? '-R' : j === 1 ? '-S' : '-T') + '-gauge');
      gaugeH1.setAttribute('id', dataLabels[i] + (j === 0 ? '-R' : j === 1 ? '-S' : '-T') + '-h1');
      gaugeH1.textContent = valueH1;
      previewDiv.setAttribute('id', dataLabels[i] + (j === 0 ? '-R' : j === 1 ? '-S' : '-T') + '-preview');
      previewDiv.classList.add('prev-val');
      canvasGauge.setAttribute('id', dataLabels[i] + (j === 0 ? '-R' : j === 1 ? '-S' : '-T') + '-canvas');
      gaugeDiv.appendChild(gaugeH1);
      gaugeDiv.appendChild(previewDiv);
      gaugeDiv.appendChild(canvasGauge);
      elementGaugeSection.appendChild(gaugeDiv);
    }
    gaugeSection.appendChild(elementGaugeSection);
  }
}


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
  var Year = d.getFullYear()    
  var Month = ("0" + (d.getMonth() + 1)).slice(-2)
  var date = ("0" + d.getDate()).slice(-2)
  var hours = ((d.getHours()<10?'0':'') + d.getHours())
  var minutes = ((d.getMinutes()<10?'0':'') + d.getMinutes())
  var seconds = ((d.getSeconds()<10?'0':'') + d.getSeconds())

  // Generating the name of the .csv file
  var nombreArchivo = "Tesis_Claudio_Gereniere_"+ date + "_" + Month + "_" + Year + "_" + hours + "hs" + "-" + minutes + "m" + "-" + seconds + "s" +".csv"

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

//var socket = new WebSocket("ws:/" + "/" + location.host + ":81");

//socket.onopen = function(e) { console.log("[socket] socket.onopen ");

//};

//socket.onerror = function(e) { console.log("[socket] socket.onerror "); };


/* ---------- Evento al momento de recibir datos de la terminal de arduino ---------- */
//socket.onmessage = function(e) {
  
  var data = "18052314532022052201220866036601660514581440146213012813314761482145860001476160014829500";
  console.log("[socket] " + data);
  
  /* ---------- Agrega los caracteres especiales ("/", ":" y ","),
  al string recibido por la terminal arduino ---------- */
  var agregarCaracter = (cadena, caracter, pasos) => {
    let cadenaConCaracteres = "";
    var  longitudCadena = cadena.length;
    for (let i = 0; i < longitudCadena; i += pasos) {
      if (i + pasos < longitudCadena) {
        cadenaConCaracteres += cadena.substring(i, i + pasos) + caracter;
      } else {
        cadenaConCaracteres += cadena.substring(i, longitudCadena);
      }
    }
    return cadenaConCaracteres;
  }
  
  fecha = agregarCaracter((data.slice(0, 6)), "/", 2);;
  hora = agregarCaracter((data.slice(6, 12)), ":", 2);
  vrms_r = agregarCaracter((data.slice(12, 16)), ".", 3);
  vrms_s = agregarCaracter((data.slice(16, 20)), ".", 3);
  vrms_t = agregarCaracter((data.slice(20, 24)), ".", 3);
  irms_r = agregarCaracter((data.slice(24, 28)), ".", 3);
  irms_s = agregarCaracter((data.slice(28, 32)), ".", 3);
  irms_t = agregarCaracter((data.slice(32, 36)), ".", 3);
  prms_r = agregarCaracter((data.slice(36, 40)), ".", 3);
  prms_s = agregarCaracter((data.slice(40, 44)), ".", 3);
  prms_t = agregarCaracter((data.slice(44, 48)), ".", 3);
  fp_r = agregarCaracter((data.slice(48, 51)), ".", 3);
  fp_s = agregarCaracter((data.slice(51, 54)), ".", 3);
  fp_t = agregarCaracter((data.slice(54, 57)), ".", 3);
  energ_r = agregarCaracter((data.slice(57, 65)), ".", 5);
  energ_s = agregarCaracter((data.slice(65, 73)), ".", 5);
  energ_t = agregarCaracter((data.slice(73, 81)), ".", 5);
  energ_total = agregarCaracter((data.slice(81, 89)), ".", 5);

  newData = [fecha, hora, vrms_r, vrms_s, vrms_t, irms_r, irms_s, irms_t, prms_r, prms_s, prms_t, fp_r, fp_s, fp_t, energ_r, energ_s, energ_t, energ_total];
  info.unshift(newData);
 
  
  /* ---------- Inserción de los valores de las variables en el html de #data-section---------- */
  var p=2;
    for (let i = 2; i < dataLabels.length; i++) {
      if (i === dataLabels.length-1) {
        for (let j = 1; j < 4; j++) {
          document.getElementById(dataLabels[i]).innerHTML = newData[p];
        }
      } else {
        for (let j = 1; j < 4; j++) {
          document.getElementById(dataLabels[i] + '-' + (j === 1 ? 'R' : j === 2 ? 'S' : 'T')).innerHTML = newData[p];
          p++;
        }
      }
    }
  
  document.getElementById("Fecha").innerHTML = fecha;
  document.getElementById("Hora").innerHTML = hora;

  /* ---------- Se asignan los Min y Max, y se insertan en el html de #stat-section---------- */
  var datoUltimaFila = info[info.length - 1];
  var ultimaFila = newData.length-1;
  var l=2;
  if (flag==0) {
    for (let i = 2; i < dataLabels.length; i++) {
      if (i === dataLabels.length-1) {
        minLab = dataLabels[i] + '-Min';
        maxLab = dataLabels[i] + '-Max';
        document.getElementById(minLab).innerHTML = newData[ultimaFila];
        document.getElementById(maxLab).innerHTML = newData[ultimaFila];
      } else{
        for (let j = 0; j < 3; j++) {
          for (let m = 0; m < 2; m++) {
            document.getElementById(dataLabels[i] + '-' + (j === 0 ? 'R' : j === 1 ? 'S' : 'T') + '-' + (m === 0 ? 'Min' : 'Max')).innerHTML = newData[l];          
          }
          l++
        }
      }
    }
    flag = 1;
  } else {
    for (let i = 2; i < dataLabels.length; i++) {
      if (i === dataLabels.length-1) {
        minLab = dataLabels[i] + '-Min';
        maxLab = dataLabels[i] + '-Max';
        if (newData[ultimaFila]<datoUltimaFila[ultimaFila]) {
          minVal = newData[ultimaFila];
          maxVal = datoUltimaFila[ultimaFila];
        }
        if (newData[ultimaFila]>datoUltimaFila[ultimaFila]) {
          maxVal = newData[ultimaFila];
          minVal = datoUltimaFila[ultimaFila];
        }
        document.getElementById(minLab).innerHTML = minVal;
        document.getElementById(maxLab).innerHTML = maxVal;
      }else{
        for (let j = 0; j < 3; j++) {
          minLab = dataLabels[i] + '-' + (j === 0 ? 'R' : j === 1 ? 'S' : 'T') + '-Min';
          maxLab = dataLabels[i] + '-' + (j === 0 ? 'R' : j === 1 ? 'S' : 'T') + '-Max';

          if (newData[l]<datoUltimaFila[l]) {
            minVal = newData[l];
            maxVal = datoUltimaFila[l];
          }
          if (newData[l]>datoUltimaFila[l]) {
            maxVal = newData[l];
            minVal = datoUltimaFila[l];
          }
          document.getElementById(dataLabels[i] + '-' + (j === 0 ? 'R' : j === 1 ? 'S' : 'T') + '-Min').innerHTML = minVal;
          document.getElementById(dataLabels[i] + '-' + (j === 0 ? 'R' : j === 1 ? 'S' : 'T') + '-Max').innerHTML = maxVal;          
          l++
        }
      }  
    }
  }

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
//}