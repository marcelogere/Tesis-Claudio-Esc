//Set options of Gauge
/* ------------------------------- Vrms_R ------------------------------- */
    var opts_vrms_R = {
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
        labels: [0, 100, 200, 300, 400, 500],
        fractionDigits: 0
        },
        // static zones
        staticZones: [
        {strokeStyle: "#F03E3E", min: 0, max: 100},
        {strokeStyle: "#FFDD00", min: 100, max: 200},
        {strokeStyle: "#30B32D", min: 200, max: 300},
        {strokeStyle: "#FFDD00", min: 300, max: 400},
        {strokeStyle: "#F03E3E", min: 400, max: 500}
        ],
        // render ticks
        renderTicks: {
        divisions: 5,
        divWidth: 1.1,
        divLength: 0.7,
        divColor: "#333333",
        subDivisions: 3,
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
    
    var target_vrms_r = document.getElementById('vrms_R'); 
    var gauge_vrms_r = new Gauge(target_vrms_r).setOptions(opts_vrms_R);
    prueba = document.getElementById("preview-vrms-r").className = "prev-val";
    gauge_vrms_r.setTextField(document.getElementById("preview-vrms-r"), 1);
    gauge_vrms_r.maxValue = 500;
    gauge_vrms_r.setMinValue(0);
    gauge_vrms_r.set(0);
    document.getElementById('VRms_R').addEventListener("DOMSubtreeModified", fVmrs_r, true);
    function fVmrs_r(){
        gauge_vrms_r.set(vrms_r);
    }
    gauge_vrms_r.animationSpeed = 70;


/* ------------------------------- Vrms_S ------------------------------- */
    var opts_vrms_S = {
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
        labels: [0, 100, 200, 300, 400, 500],
        fractionDigits: 0
        },
        // static zones
        staticZones: [
        {strokeStyle: "#F03E3E", min: 0, max: 100},
        {strokeStyle: "#FFDD00", min: 100, max: 200},
        {strokeStyle: "#30B32D", min: 200, max: 300},
        {strokeStyle: "#FFDD00", min: 300, max: 400},
        {strokeStyle: "#F03E3E", min: 400, max: 500}
        ],
        // render ticks
        renderTicks: {
        divisions: 5,
        divWidth: 1.1,
        divLength: 0.7,
        divColor: "#333333",
        subDivisions: 3,
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
    
    var target_vrms_s = document.getElementById("vrms_S"); 
    var gauge_vrms_s = new Gauge(target_vrms_s).setOptions(opts_vrms_S);
    document.getElementById("preview-vrms-s").className = "prev-val";
    gauge_vrms_s.setTextField(document.getElementById("preview-vrms-s"), 1);
    gauge_vrms_s.maxValue = 500;
    gauge_vrms_s.setMinValue(0);
    gauge_vrms_s.set(0);
    document.getElementById('VRms_S').addEventListener("DOMSubtreeModified", fVmrs_s, true);
    function fVmrs_s(){
        gauge_vrms_s.set(document.getElementById('VRms_S').innerHTML);
    }
    gauge_vrms_s.animationSpeed = 70;

/* ------------------------------- Vrms_T ------------------------------- */
var opts_vrms_T = {
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
    labels: [0, 100, 200, 300, 400, 500],
    fractionDigits: 0
    },
    // static zones
    staticZones: [
    {strokeStyle: "#F03E3E", min: 0, max: 100},
    {strokeStyle: "#FFDD00", min: 100, max: 200},
    {strokeStyle: "#30B32D", min: 200, max: 300},
    {strokeStyle: "#FFDD00", min: 300, max: 400},
    {strokeStyle: "#F03E3E", min: 400, max: 500}
    ],
    // render ticks
    renderTicks: {
    divisions: 5,
    divWidth: 1.1,
    divLength: 0.7,
    divColor: "#333333",
    subDivisions: 3,
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

var target_vrms_t = document.getElementById("vrms_T"); 
var gauge_vrms_t = new Gauge(target_vrms_t).setOptions(opts_vrms_T);
document.getElementById("preview-vrms-t").className = "prev-val";
gauge_vrms_t.setTextField(document.getElementById("preview-vrms-t"), 1);
gauge_vrms_t.maxValue = 500;
gauge_vrms_t.setMinValue(0);
gauge_vrms_t.set(0);
document.getElementById('VRms_T').addEventListener("DOMSubtreeModified", fVmrs_t, true);
function fVmrs_t(){
    gauge_vrms_t.set(document.getElementById('VRms_T').innerHTML);
}
gauge_vrms_t.animationSpeed = 70;