/* ------------------------------- Set options of Gauge ------------------------------- */
import { vrms_r, vrms_s, vrms_t, irms_r, irms_s, irms_t, prms_r, prms_s, prms_t, fp_r, fp_s, fp_t, energ_r, energ_s, energ_t, energ_total
} from "./app.js";

/* ------------------------------- Limit Values for the alarm ------------------------------- */
var vrmsLimit = 230;
var irmsLimit = 800;
var kwLimit = 147;
var fpLimit = 130;
var energLimit = 14600;

/* ------------------------------- Sound Options ------------------------------- */
var sound = new Howl({
    src: ['./media/alarm.wav'],
    loop: true,
    volume: 0.1,
    onend: function() {
      console.log('Finished!');
    }
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
    if (vrms_r>vrmsLimit) {
        sound.play();
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
    if (vrms_s>vrmsLimit) {
        sound.play();
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
    if (vrms_t>vrmsLimit) {
        sound.play();
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
    if (irms_r>irmsLimit) {
        sound.play();
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
    if (irms_s>irmsLimit) {
        sound.play();
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
    if (irms_t>irmsLimit) {
        sound.play();
    }
}
irms_tGaugeObject.animationSpeed = 30;