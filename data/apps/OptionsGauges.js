/* ------------------------------- Set options of Gauge ------------------------------- */
import { vrms_r, vrms_s, vrms_t, irms_r, irms_s, irms_t, prms_r, prms_s, prms_t, fp_r, fp_s, fp_t, energ_r, energ_s, energ_t, energ_total
} from "./app.js";

/* ------------------------------- Limit Values for the alarm ------------------------------- */
var vrmsMaxLimit = 230;
var vrmsMinLimit = 210;
var irmsMaxLimit = 800;
var irmsMinLimit = 600;
var kwMaxLimit = 150;
var kwMinLimit = 140;
var fpMaxLimit = 130;
var fpMinLimit = 110;
var energMaxLimit = 15000;
var energMinLimit = 14000;

/* ------------------------------- Sound Options ------------------------------- */
var sound = new Howl({
    src: ['./media/alarm.wav'],
    loop: true,
    volume: 0.5,
  });

/* ------------------------------- VRms Options ------------------------------- */

var VRms_opts = {
    // options here
    // color configs
    colorStart: "#6fadcf",
    colorStop: void 0,
    gradientType: 0,
    strokeColor: "#e0e0e0",
    generateGradient: true,
    percentColors: [[0.0, "#a9d70b" ], [0.50, "#f9c802"], [1.0, "#ff0000"]],
    // customize pointer
    pointer: {
    length: 0.42,
    strokeWidth: 0.035,
    iconScale: 1.0
    },
    // static labels
    staticLabels: {
    font: "14px sans-serif",
    labels: [0, 50, 100, 150, 200, 220, 250, 300],
    fractionDigits: 0
    },
    // static zones
    staticZones: [
    {strokeStyle: "#F03E3E", min: 0, max: 210},
    {strokeStyle: "#FFDD00", min: 210, max: 215},
    {strokeStyle: "#30B32D", min: 215, max: 225},
    {strokeStyle: "#FFDD00", min: 225, max: 230},
    {strokeStyle: "#F03E3E", min: 230, max: 300}
    ],
    // render ticks
    renderTicks: {
    divisions: 6,
    divWidth: 1.1,
    divLength: 0.7,
    divColor: "#333333",
    subDivisions: 4,
    subLength: 0.5,
    subWidth: 0.6,
    subColor: "#666666"
    },
    // the span of the gauge arc
    angle: 0,
    // line thickness
    lineWidth: 0.2,
    // radius scale
    radiusScale: 1.0,
    // font size
    fontSize: 300,
    // if false, max value increases automatically if value > maxValue
    limitMax: false,
    // if true, the min value of the gauge will be fixed
    limitMin: false,
    // High resolution support
    highDpiSupport: true
};

/* ------------------------------- VRms-R Set Values ------------------------------- */
var vrms_rTargetGauge = document.getElementById('VRms-R-canvas');
var vrms_rGaugeObject = new Gauge(vrms_rTargetGauge).setOptions(VRms_opts);
vrms_rGaugeObject.setTextField(document.getElementById('VRms-R-preview'), 1);
vrms_rGaugeObject.maxValue = 300;
vrms_rGaugeObject.setMinValue(0);
vrms_rGaugeObject.set(0);
document.getElementById('VRms-R').addEventListener("DOMSubtreeModified", fVrms_r, true);
function fVrms_r(){
    vrms_rGaugeObject.set(vrms_r);
    if (vrms_r>vrmsMaxLimit || vrms_r<vrmsMinLimit) {
        sound.play();
        window.setInterval (BlinkIt, 500);
        var colorFondo = "red";
        var colorFuente = "white";
      
        function BlinkIt () {
          colorFondo = (colorFondo == "#d9dee3")? "red" : "#d9dee3";
          document.getElementById ("VRms-R").style.backgroundColor = colorFondo;
          colorFuente = (colorFuente == "#000000")? "white" : "#000000";
          document.getElementById ("VRms-R").style.color= colorFuente;
        }

    } else{
      sound.pause();
      document.getElementById ("VRms-R").style.backgroundColor = "#d9dee3";
      document.getElementById ("VRms-R").style.color= "#000000";
    }
}
vrms_rGaugeObject.animationSpeed = 30;
    
/* ------------------------------- VRms-S Set Values ------------------------------- */
var vrms_sTargetGauge = document.getElementById('VRms-S-canvas');
var vrms_sGaugeObject = new Gauge(vrms_sTargetGauge).setOptions(VRms_opts);
vrms_sGaugeObject.setTextField(document.getElementById('VRms-S-preview'), 1);
vrms_sGaugeObject.maxValue = 300;
vrms_sGaugeObject.setMinValue(0);
vrms_sGaugeObject.set(0);
document.getElementById('VRms-S').addEventListener("DOMSubtreeModified", fVrms_s, true);
function fVrms_s(){
    vrms_sGaugeObject.set(vrms_s);
    if (vrms_s>vrmsMaxLimit || vrms_s<vrmsMinLimit) {
        sound.play();
        window.setInterval (BlinkIt, 500);
        var colorFondo = "red";
        var colorFuente = "white";
      
        function BlinkIt () {
          colorFondo = (colorFondo == "#d9dee3")? "red" : "#d9dee3";
          document.getElementById ("VRms-S").style.backgroundColor = colorFondo;
          colorFuente = (colorFuente == "#000000")? "white" : "#000000";
          document.getElementById ("VRms-S").style.color= colorFuente;
        }
    } else{
      sound.pause();
      document.getElementById ("VRms-S").style.backgroundColor = "#d9dee3";
      document.getElementById ("VRms-S").style.color= "#000000";
    }
}
vrms_sGaugeObject.animationSpeed = 30;

/* ------------------------------- VRms-T Set Values ------------------------------- */
var vrms_tTargetGauge = document.getElementById('VRms-T-canvas');
var vrms_tGaugeObject = new Gauge(vrms_tTargetGauge).setOptions(VRms_opts);
vrms_tGaugeObject.setTextField(document.getElementById('VRms-T-preview'), 1);
vrms_tGaugeObject.maxValue = 300;
vrms_tGaugeObject.setMinValue(0);
vrms_tGaugeObject.set(0);
document.getElementById('VRms-T').addEventListener("DOMSubtreeModified", fvrms_t, true);
function fvrms_t(){
    vrms_tGaugeObject.set(vrms_t);
    if (vrms_t>vrmsMaxLimit || vrms_t<vrmsMinLimit) {
        sound.play();
        window.setInterval (BlinkIt, 500);
        var colorFondo = "red";
        var colorFuente = "white";
      
        function BlinkIt () {
          colorFondo = (colorFondo == "#d9dee3")? "red" : "#d9dee3";
          document.getElementById ("VRms-T").style.backgroundColor = colorFondo;
          colorFuente = (colorFuente == "#000000")? "white" : "#000000";
          document.getElementById ("VRms-T").style.color= colorFuente;
        }
    } else{
      sound.pause();
      document.getElementById ("VRms-T").style.backgroundColor = "#d9dee3";
      document.getElementById ("VRms-T").style.color= "#000000";
    }
}
vrms_tGaugeObject.animationSpeed = 30;



/* ------------------------------- IRms Options ------------------------------- */
var IRms_opts = {
    // options here
    // color configs
    colorStart: "#6fadcf",
    colorStop: void 0,
    gradientType: 0,
    strokeColor: "#e0e0e0",
    generateGradient: true,
    percentColors: [[0.0, "#a9d70b" ], [0.50, "#f9c802"], [1.0, "#ff0000"]],
    // customize pointer
    pointer: {
    length: 0.42,
    strokeWidth: 0.035,
    iconScale: 1.0
    },
    // static labels
    staticLabels: {
    font: "14px sans-serif",
    labels: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    fractionDigits: 0
    },
    // static zones
    staticZones: [
    {strokeStyle: "#F03E3E", min: 0, max: 400},
    {strokeStyle: "#FFDD00", min: 400, max: 500},
    {strokeStyle: "#30B32D", min: 500, max: 700},
    {strokeStyle: "#FFDD00", min: 700, max: 800},
    {strokeStyle: "#F03E3E", min: 800, max: 1000}
    ],
    // render ticks
    renderTicks: {
    divisions: 10,
    divWidth: 1.1,
    divLength: 0.7,
    divColor: "#333333",
    subDivisions: 2,
    subLength: 0.5,
    subWidth: 0.6,
    subColor: "#666666"
    },
    // the span of the gauge arc
    angle: 0,
    // line thickness
    lineWidth: 0.2,
    // radius scale
    radiusScale: 1.0,
    // font size
    fontSize: 300,
    // if false, max value increases automatically if value > maxValue
    limitMax: false,
    // if true, the min value of the gauge will be fixed
    limitMin: false,
    // High resolution support
    highDpiSupport: true
};

/* ------------------------------- IRms-R Set Values ------------------------------- */
var irms_rTargetGauge = document.getElementById('IRms-R-canvas');
var irms_rGaugeObject = new Gauge(irms_rTargetGauge).setOptions(IRms_opts);
irms_rGaugeObject.setTextField(document.getElementById('IRms-R-preview'), 1);
irms_rGaugeObject.maxValue = 1000;
irms_rGaugeObject.setMinValue(0);
irms_rGaugeObject.set(0);
document.getElementById('IRms-R').addEventListener("DOMSubtreeModified", firms_r, true);
function firms_r(){
    irms_rGaugeObject.set(irms_r);
    if (irms_r>irmsMaxLimit || irms_r<irmsMinLimit) {
        sound.play();
        window.setInterval (BlinkIt, 500);
        var colorFondo = "red";
        var colorFuente = "white";
      
        function BlinkIt () {
          colorFondo = (colorFondo == "#d9dee3")? "red" : "#d9dee3";
          document.getElementById ("IRms-R").style.backgroundColor = colorFondo;
          colorFuente = (colorFuente == "#000000")? "white" : "#000000";
          document.getElementById ("IRms-R").style.color= colorFuente;
        }
    } else{
      sound.pause();
      document.getElementById ("IRms-R").style.backgroundColor = "#d9dee3";
      document.getElementById ("IRms-R").style.color= "#000000";
    }
}
irms_rGaugeObject.animationSpeed = 30;

/* ------------------------------- IRms-S Set Values ------------------------------- */
var irms_sTargetGauge = document.getElementById('IRms-S-canvas');
var irms_sGaugeObject = new Gauge(irms_sTargetGauge).setOptions(IRms_opts);
irms_sGaugeObject.setTextField(document.getElementById('IRms-S-preview'), 1);
irms_sGaugeObject.maxValue = 1000;
irms_sGaugeObject.setMinValue(0);
irms_sGaugeObject.set(0);
document.getElementById('IRms-S').addEventListener("DOMSubtreeModified", firms_s, true);
function firms_s(){
    irms_sGaugeObject.set(irms_s);
    if (irms_s>irmsMaxLimit || irms_s<irmsMinLimit) {
        sound.play();
        window.setInterval (BlinkIt, 500);
        var colorFondo = "red";
        var colorFuente = "white";
      
        function BlinkIt () {
          colorFondo = (colorFondo == "#d9dee3")? "red" : "#d9dee3";
          document.getElementById ("IRms-S").style.backgroundColor = colorFondo;
          colorFuente = (colorFuente == "#000000")? "white" : "#000000";
          document.getElementById ("IRms-S").style.color= colorFuente;
        }
    } else{
      sound.pause();
      document.getElementById ("IRms-S").style.backgroundColor = "#d9dee3";
      document.getElementById ("IRms-S").style.color= "#000000";
    }
}
irms_sGaugeObject.animationSpeed = 30;

/* ------------------------------- IRms-T Set Values ------------------------------- */
var irms_tTargetGauge = document.getElementById('IRms-T-canvas');
var irms_tGaugeObject = new Gauge(irms_tTargetGauge).setOptions(IRms_opts);
irms_tGaugeObject.setTextField(document.getElementById('IRms-T-preview'), 1);
irms_tGaugeObject.maxValue = 1000;
irms_tGaugeObject.setMinValue(0);
irms_tGaugeObject.set(0);
document.getElementById('IRms-T').addEventListener("DOMSubtreeModified", firms_t, true);
function firms_t(){
    irms_tGaugeObject.set(irms_t);
    if (irms_t>irmsMaxLimit || irms_t<irmsMinLimit) {
        sound.play();
        window.setInterval (BlinkIt, 500);
        var colorFondo = "red";
        var colorFuente = "white";
      
        function BlinkIt () {
          colorFondo = (colorFondo == "#d9dee3")? "red" : "#d9dee3";
          document.getElementById ("IRms-T").style.backgroundColor = colorFondo;
          colorFuente = (colorFuente == "#000000")? "white" : "#000000";
          document.getElementById ("IRms-T").style.color= colorFuente;
        }
    } else{
      sound.pause();
      document.getElementById ("IRms-T").style.backgroundColor = "#d9dee3";
      document.getElementById ("IRms-T").style.color= "#000000";
    }
}
irms_tGaugeObject.animationSpeed = 30;

/* ------------------------------- KW Options ------------------------------- */

var KW_opts = {
  // options here
  // color configs
  colorStart: "#6fadcf",
  colorStop: void 0,
  gradientType: 0,
  strokeColor: "#e0e0e0",
  generateGradient: true,
  percentColors: [[0.0, "#a9d70b" ], [0.50, "#f9c802"], [1.0, "#ff0000"]],
  // customize pointer
  pointer: {
  length: 0.42,
  strokeWidth: 0.035,
  iconScale: 1.0
  },
  // static labels
  staticLabels: {
  font: "14px sans-serif",
  labels: [0, 50, 100, 150, 200],
  fractionDigits: 0
  },
  // static zones
  staticZones: [
  {strokeStyle: "#F03E3E", min: 0, max: 130},
  {strokeStyle: "#FFDD00", min: 130, max: 140},
  {strokeStyle: "#30B32D", min: 140, max: 145},
  {strokeStyle: "#FFDD00", min: 145, max: 150},
  {strokeStyle: "#F03E3E", min: 150, max: 200}
  ],
  // render ticks
  renderTicks: {
  divisions: 10,
  divWidth: 1.1,
  divLength: 0.7,
  divColor: "#333333",
  subDivisions: 2,
  subLength: 0.5,
  subWidth: 0.6,
  subColor: "#666666"
  },
  // the span of the gauge arc
  angle: 0,
  // line thickness
  lineWidth: 0.2,
  // radius scale
  radiusScale: 1.0,
  // font size
  fontSize: 300,
  // if false, max value increases automatically if value > maxValue
  limitMax: false,
  // if true, the min value of the gauge will be fixed
  limitMin: false,
  // High resolution support
  highDpiSupport: true
};

/* ------------------------------- KW-R Set Values ------------------------------- */

var prms_rTargetGauge = document.getElementById('KW-R-canvas');
var prms_rGaugeObject = new Gauge(prms_rTargetGauge).setOptions(KW_opts);
prms_rGaugeObject.setTextField(document.getElementById('KW-R-preview'), 1);
prms_rGaugeObject.maxValue = 1000;
prms_rGaugeObject.setMinValue(0);
prms_rGaugeObject.set(0);
document.getElementById('KW-R').addEventListener("DOMSubtreeModified", fprms_r, true);
function fprms_r(){
    prms_rGaugeObject.set(prms_r);
    if (prms_r>kwMaxLimit || prms_r<kwMinLimit) {
        sound.play();
        window.setInterval (BlinkIt, 500);
        var colorFondo = "red";
        var colorFuente = "white";
      
        function BlinkIt () {
          colorFondo = (colorFondo == "#d9dee3")? "red" : "#d9dee3";
          document.getElementById ("KW-R").style.backgroundColor = colorFondo;
          colorFuente = (colorFuente == "#000000")? "white" : "#000000";
          document.getElementById ("KW-R").style.color= colorFuente;
        }
    } else{
      sound.pause();
      document.getElementById ("KW-R").style.backgroundColor = "#d9dee3";
      document.getElementById ("KW-R").style.color= "#000000";
    }
}
prms_rGaugeObject.animationSpeed = 30;


/* ------------------------------- KW-S Set Values ------------------------------- */

var prms_sTargetGauge = document.getElementById('KW-S-canvas');
var prms_sGaugeObject = new Gauge(prms_sTargetGauge).setOptions(KW_opts);
prms_sGaugeObject.setTextField(document.getElementById('KW-S-preview'), 1);
prms_sGaugeObject.maxValue = 1000;
prms_sGaugeObject.setMinValue(0);
prms_sGaugeObject.set(0);
document.getElementById('KW-S').addEventListener("DOMSubtreeModified", fprms_s, true);
function fprms_s(){
    prms_sGaugeObject.set(prms_s);
    if (prms_s>kwMaxLimit || prms_s<kwMinLimit) {
        sound.play();
        window.setInterval (BlinkIt, 500);
        var colorFondo = "red";
        var colorFuente = "white";
      
        function BlinkIt () {
          colorFondo = (colorFondo == "#d9dee3")? "red" : "#d9dee3";
          document.getElementById ("KW-S").style.backgroundColor = colorFondo;
          colorFuente = (colorFuente == "#000000")? "white" : "#000000";
          document.getElementById ("KW-S").style.color= colorFuente;
        }
    } else{
      sound.pause();
      document.getElementById ("KW-S").style.backgroundColor = "#d9dee3";
      document.getElementById ("KW-S").style.color= "#000000";
    }
}
prms_sGaugeObject.animationSpeed = 30;

/* ------------------------------- KW-T Set Values ------------------------------- */

var prms_tTargetGauge = document.getElementById('KW-T-canvas');
var prms_tGaugeObject = new Gauge(prms_tTargetGauge).setOptions(KW_opts);
prms_tGaugeObject.setTextField(document.getElementById('KW-T-preview'), 1);
prms_tGaugeObject.maxValue = 1000;
prms_tGaugeObject.setMinValue(0);
prms_tGaugeObject.set(0);
document.getElementById('KW-T').addEventListener("DOMSubtreeModified", fprms_t, true);
function fprms_t(){
    prms_tGaugeObject.set(prms_t);
    if (prms_t>kwMaxLimit || prms_t<kwMinLimit) {
        sound.play();
        window.setInterval (BlinkIt, 500);
        var colorFondo = "red";
        var colorFuente = "white";
      
        function BlinkIt () {
          colorFondo = (colorFondo == "#d9dee3")? "red" : "#d9dee3";
          document.getElementById ("KW-T").style.backgroundColor = colorFondo;
          colorFuente = (colorFuente == "#000000")? "white" : "#000000";
          document.getElementById ("KW-T").style.color= colorFuente;
        }
    } else{
      sound.pause();
      document.getElementById ("KW-T").style.backgroundColor = "#d9dee3";
      document.getElementById ("KW-T").style.color= "#000000";
    }
}
prms_tGaugeObject.animationSpeed = 30;

/* ------------------------------- Factor de Potencia Options ------------------------------- */

var FP_opts = {
  // options here
  // color configs
  colorStart: "#6fadcf",
  colorStop: void 0,
  gradientType: 0,
  strokeColor: "#e0e0e0",
  generateGradient: true,
  percentColors: [[0.0, "#a9d70b" ], [0.50, "#f9c802"], [1.0, "#ff0000"]],
  // customize pointer
  pointer: {
  length: 0.42,
  strokeWidth: 0.035,
  iconScale: 1.0
  },
  // static labels
  staticLabels: {
  font: "14px sans-serif",
  labels: [0, 50, 100, 150, 200],
  fractionDigits: 0
  },
  // static zones
  staticZones: [
  {strokeStyle: "#F03E3E", min: 0, max: 130},
  {strokeStyle: "#FFDD00", min: 130, max: 140},
  {strokeStyle: "#30B32D", min: 140, max: 145},
  {strokeStyle: "#FFDD00", min: 145, max: 150},
  {strokeStyle: "#F03E3E", min: 150, max: 200}
  ],
  // render ticks
  renderTicks: {
  divisions: 10,
  divWidth: 1.1,
  divLength: 0.7,
  divColor: "#333333",
  subDivisions: 2,
  subLength: 0.5,
  subWidth: 0.6,
  subColor: "#666666"
  },
  // the span of the gauge arc
  angle: 0,
  // line thickness
  lineWidth: 0.2,
  // radius scale
  radiusScale: 1.0,
  // font size
  fontSize: 300,
  // if false, max value increases automatically if value > maxValue
  limitMax: false,
  // if true, the min value of the gauge will be fixed
  limitMin: false,
  // High resolution support
  highDpiSupport: true
};

/* ------------------------------- Factor de Potencia-R Set Values ------------------------------- */

var fp_rTargetGauge = document.getElementById('Factor de Potencia-R-canvas');
var fp_rGaugeObject = new Gauge(fp_rTargetGauge).setOptions(FP_opts);
fp_rGaugeObject.setTextField(document.getElementById('Factor de Potencia-R-preview'), 1);
fp_rGaugeObject.maxValue = 1000;
fp_rGaugeObject.setMinValue(0);
fp_rGaugeObject.set(0);
document.getElementById('Factor de Potencia-R').addEventListener("DOMSubtreeModified", ffp_r, true);
function ffp_r(){
    fp_rGaugeObject.set(fp_r);
    if (fp_r>fpMaxLimit || fp_r<fpMinLimit) {
        sound.play();
        window.setInterval (BlinkIt, 500);
        var colorFondo = "red";
        var colorFuente = "white";
      
        function BlinkIt () {
          colorFondo = (colorFondo == "#d9dee3")? "red" : "#d9dee3";
          document.getElementById ("Factor de Potencia-R").style.backgroundColor = colorFondo;
          colorFuente = (colorFuente == "#000000")? "white" : "#000000";
          document.getElementById ("Factor de Potencia-R").style.color= colorFuente;
        }
    } else{
      sound.pause();
      document.getElementById ("Factor de Potencia-R").style.backgroundColor = "#d9dee3";
      document.getElementById ("Factor de Potencia-R").style.color= "#000000";
    }
}
fp_rGaugeObject.animationSpeed = 30;


/* ------------------------------- Factor de Potencia-S Set Values ------------------------------- */

var fp_sTargetGauge = document.getElementById('Factor de Potencia-S-canvas');
var fp_sGaugeObject = new Gauge(fp_sTargetGauge).setOptions(FP_opts);
fp_sGaugeObject.setTextField(document.getElementById('Factor de Potencia-S-preview'), 1);
fp_sGaugeObject.maxValue = 1000;
fp_sGaugeObject.setMinValue(0);
fp_sGaugeObject.set(0);
document.getElementById('Factor de Potencia-S').addEventListener("DOMSubtreeModified", ffp_s, true);
function ffp_s(){
    fp_sGaugeObject.set(fp_s);
    if (fp_s>fpMaxLimit || fp_s<fpMinLimit) {
        sound.play();
        window.setInterval (BlinkIt, 500);
        var colorFondo = "red";
        var colorFuente = "white";
      
        function BlinkIt () {
          colorFondo = (colorFondo == "#d9dee3")? "red" : "#d9dee3";
          document.getElementById ("Factor de Potencia-S").style.backgroundColor = colorFondo;
          colorFuente = (colorFuente == "#000000")? "white" : "#000000";
          document.getElementById ("Factor de Potencia-S").style.color= colorFuente;
        }
    } else{
      sound.pause();
      document.getElementById ("Factor de Potencia-S").style.backgroundColor = "#d9dee3";
      document.getElementById ("Factor de Potencia-S").style.color= "#000000";
    }
}
fp_sGaugeObject.animationSpeed = 30;

/* ------------------------------- Factor de Potencia-T Set Values ------------------------------- */

var fp_tTargetGauge = document.getElementById('Factor de Potencia-T-canvas');
var fp_tGaugeObject = new Gauge(fp_tTargetGauge).setOptions(FP_opts);
fp_tGaugeObject.setTextField(document.getElementById('Factor de Potencia-T-preview'), 1);
fp_tGaugeObject.maxValue = 1000;
fp_tGaugeObject.setMinValue(0);
fp_tGaugeObject.set(0);
document.getElementById('Factor de Potencia-T').addEventListener("DOMSubtreeModified", ffp_t, true);
function ffp_t(){
    fp_tGaugeObject.set(fp_t);
    if (fp_t>fpMaxLimit || fp_t<fpMinLimit) {
        sound.play();
        window.setInterval (BlinkIt, 500);
        var colorFondo = "red";
        var colorFuente = "white";
      
        function BlinkIt () {
          colorFondo = (colorFondo == "#d9dee3")? "red" : "#d9dee3";
          document.getElementById ("Factor de Potencia-T").style.backgroundColor = colorFondo;
          colorFuente = (colorFuente == "#000000")? "white" : "#000000";
          document.getElementById ("Factor de Potencia-T").style.color= colorFuente;
        }
    } else{
      sound.pause();
      document.getElementById ("Factor de Potencia-T").style.backgroundColor = "#d9dee3";
      document.getElementById ("Factor de Potencia-T").style.color= "#000000";
    }
}
fp_tGaugeObject.animationSpeed = 30;

/* ------------------------------- Energia Options ------------------------------- */

var energ_opts = {
  // options here
  // color configs
  colorStart: "#6fadcf",
  colorStop: void 0,
  gradientType: 0,
  strokeColor: "#e0e0e0",
  generateGradient: true,
  percentColors: [[0.0, "#a9d70b" ], [0.50, "#f9c802"], [1.0, "#ff0000"]],
  // customize pointer
  pointer: {
  length: 0.42,
  strokeWidth: 0.035,
  iconScale: 1.0
  },
  // static labels
  staticLabels: {
  font: "14px sans-serif",
  labels: [0, 50, 100, 150, 200],
  fractionDigits: 0
  },
  // static zones
  staticZones: [
  {strokeStyle: "#F03E3E", min: 0, max: 130},
  {strokeStyle: "#FFDD00", min: 130, max: 140},
  {strokeStyle: "#30B32D", min: 140, max: 145},
  {strokeStyle: "#FFDD00", min: 145, max: 150},
  {strokeStyle: "#F03E3E", min: 150, max: 200}
  ],
  // render ticks
  renderTicks: {
  divisions: 10,
  divWidth: 1.1,
  divLength: 0.7,
  divColor: "#333333",
  subDivisions: 2,
  subLength: 0.5,
  subWidth: 0.6,
  subColor: "#666666"
  },
  // the span of the gauge arc
  angle: 0,
  // line thickness
  lineWidth: 0.2,
  // radius scale
  radiusScale: 1.0,
  // font size
  fontSize: 300,
  // if false, max value increases automatically if value > maxValue
  limitMax: false,
  // if true, the min value of the gauge will be fixed
  limitMin: false,
  // High resolution support
  highDpiSupport: true
};

/* ------------------------------- Energia-R Set Values ------------------------------- */

var energ_rTargetGauge = document.getElementById('Energia-R-canvas');
var energ_rGaugeObject = new Gauge(energ_rTargetGauge).setOptions(energ_opts);
energ_rGaugeObject.setTextField(document.getElementById('Energia-R-preview'), 1);
energ_rGaugeObject.maxValue = 1000;
energ_rGaugeObject.setMinValue(0);
energ_rGaugeObject.set(0);
document.getElementById('Energia-R').addEventListener("DOMSubtreeModified", fenerg_r, true);
function fenerg_r(){
    energ_rGaugeObject.set(energ_r);
    if (energ_r>energMaxLimit || energ_r<energMinLimit) {
        sound.play();
        window.setInterval (BlinkIt, 500);
        var colorFondo = "red";
        var colorFuente = "white";
      
        function BlinkIt () {
          colorFondo = (colorFondo == "#d9dee3")? "red" : "#d9dee3";
          document.getElementById ("Energia-R").style.backgroundColor = colorFondo;
          colorFuente = (colorFuente == "#000000")? "white" : "#000000";
          document.getElementById ("Energia-R").style.color= colorFuente;
        }
    } else{
      sound.pause();
      document.getElementById ("Energia-R").style.backgroundColor = "#d9dee3";
      document.getElementById ("Energia-R").style.color= "#000000";
    }
}
energ_rGaugeObject.animationSpeed = 30;


/* ------------------------------- Energia-S Set Values ------------------------------- */

var energ_sTargetGauge = document.getElementById('Energia-S-canvas');
var energ_sGaugeObject = new Gauge(energ_sTargetGauge).setOptions(energ_opts);
energ_sGaugeObject.setTextField(document.getElementById('Energia-S-preview'), 1);
energ_sGaugeObject.maxValue = 1000;
energ_sGaugeObject.setMinValue(0);
energ_sGaugeObject.set(0);
document.getElementById('Energia-S').addEventListener("DOMSubtreeModified", fenerg_s, true);
function fenerg_s(){
    energ_sGaugeObject.set(energ_s);
    if (energ_s>energMaxLimit || energ_s<energMinLimit) {
        sound.play();
        window.setInterval (BlinkIt, 500);
        var colorFondo = "red";
        var colorFuente = "white";
      
        function BlinkIt () {
          colorFondo = (colorFondo == "#d9dee3")? "red" : "#d9dee3";
          document.getElementById ("Energia-S").style.backgroundColor = colorFondo;
          colorFuente = (colorFuente == "#000000")? "white" : "#000000";
          document.getElementById ("Energia-S").style.color= colorFuente;
        }
    } else{
      sound.pause();
      document.getElementById ("Energia-S").style.backgroundColor = "#d9dee3";
      document.getElementById ("Energia-S").style.color= "#000000";
    }
}
energ_sGaugeObject.animationSpeed = 30;

/* ------------------------------- Energia-T Set Values ------------------------------- */

var energ_tTargetGauge = document.getElementById('Energia-T-canvas');
var energ_tGaugeObject = new Gauge(energ_tTargetGauge).setOptions(energ_opts);
energ_tGaugeObject.setTextField(document.getElementById('Energia-T-preview'), 1);
energ_tGaugeObject.maxValue = 1000;
energ_tGaugeObject.setMinValue(0);
energ_tGaugeObject.set(0);
document.getElementById('Energia-T').addEventListener("DOMSubtreeModified", fenerg_t, true);
function fenerg_t(){
    energ_tGaugeObject.set(energ_t);
    if (energ_t>energMaxLimit || energ_t<energMinLimit) {
        sound.play();
        window.setInterval (BlinkIt, 500);
        var colorFondo = "red";
        var colorFuente = "white";
      
        function BlinkIt () {
          colorFondo = (colorFondo == "#d9dee3")? "red" : "#d9dee3";
          document.getElementById ("Energia-T").style.backgroundColor = colorFondo;
          colorFuente = (colorFuente == "#000000")? "white" : "#000000";
          document.getElementById ("Energia-T").style.color= colorFuente;
        }
    } else{
      sound.pause();
      document.getElementById ("Energia-T").style.backgroundColor = "#d9dee3";
      document.getElementById ("Energia-T").style.color= "#000000";
    }
}
energ_tGaugeObject.animationSpeed = 30;

/* ------------------------------- Energia-Total Options ------------------------------- */

var energ_totalopts = {
  // options here
  // color configs
  colorStart: "#6fadcf",
  colorStop: void 0,
  gradientType: 0,
  strokeColor: "#e0e0e0",
  generateGradient: true,
  percentColors: [[0.0, "#a9d70b" ], [0.50, "#f9c802"], [1.0, "#ff0000"]],
  // customize pointer
  pointer: {
  length: 0.42,
  strokeWidth: 0.035,
  iconScale: 1.0
  },
  // static labels
  staticLabels: {
  font: "14px sans-serif",
  labels: [0, 50, 100, 150, 200],
  fractionDigits: 0
  },
  // static zones
  staticZones: [
  {strokeStyle: "#F03E3E", min: 0, max: 130},
  {strokeStyle: "#FFDD00", min: 130, max: 140},
  {strokeStyle: "#30B32D", min: 140, max: 145},
  {strokeStyle: "#FFDD00", min: 145, max: 150},
  {strokeStyle: "#F03E3E", min: 150, max: 200}
  ],
  // render ticks
  renderTicks: {
  divisions: 10,
  divWidth: 1.1,
  divLength: 0.7,
  divColor: "#333333",
  subDivisions: 2,
  subLength: 0.5,
  subWidth: 0.6,
  subColor: "#666666"
  },
  // the span of the gauge arc
  angle: 0,
  // line thickness
  lineWidth: 0.2,
  // radius scale
  radiusScale: 1.0,
  // font size
  fontSize: 300,
  // if false, max value increases automatically if value > maxValue
  limitMax: false,
  // if true, the min value of the gauge will be fixed
  limitMin: false,
  // High resolution support
  highDpiSupport: true
};

/* ------------------------------- Energia-Total Set Values ------------------------------- */

var energ_totalTargetGauge = document.getElementById('Energía Total-canvas');
var energ_totalGaugeObject = new Gauge(energ_totalTargetGauge).setOptions(energ_totalopts);
energ_totalGaugeObject.setTextField(document.getElementById('Energía Total-preview'), 1);
energ_totalGaugeObject.maxValue = 1000;
energ_totalGaugeObject.setMinValue(0);
energ_totalGaugeObject.set(0);
document.getElementById('Energía Total').addEventListener("DOMSubtreeModified", fenerg_total, true);
function fenerg_total(){
    energ_totalGaugeObject.set(energ_total);
    if (energ_total>energMaxLimit || energ_total<energMinLimit) {
        sound.play();
        window.setInterval (BlinkIt, 500);
        var colorFondo = "red";
        var colorFuente = "white";
      
        function BlinkIt () {
          colorFondo = (colorFondo == "#d9dee3")? "red" : "#d9dee3";
          document.getElementById ("Energía Total").style.backgroundColor = colorFondo;
          colorFuente = (colorFuente == "#000000")? "white" : "#000000";
          document.getElementById ("Energía Total").style.color= colorFuente;
        }
    } else{
      sound.pause();
      document.getElementById ("Energía Total").style.backgroundColor = "#d9dee3";
      document.getElementById ("Energía Total").style.color= "#000000";
    }
}
energ_totalGaugeObject.animationSpeed = 30;