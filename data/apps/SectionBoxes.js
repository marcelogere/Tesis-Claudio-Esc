var maxWidth700 = window.matchMedia("(max-width: 700px)");

//function to hide the sections through the checkboxes
function hideSections() {

    // ------ Gauge Sections ------//
    // Get the Gauge Sections
    var gS = document.getElementById("gauge-section");
    var vrmsRGS = document.getElementById("VRms-gauge-section");
    var irmsGS = document.getElementById("IRms-gauge-section");
    var kwGS = document.getElementById("KW-gauge-section");
    var fpGS = document.getElementById("Factor de Potencia-gauge-section");
    var eGS = document.getElementById("Energia-gauge-section");
    var etGS = document.getElementById("Energía Total-gauge-section");

    // Hide the Gauge Sections
    vrmsRGS.style.display = "none";
    irmsGS.style.display = "none";
    kwGS.style.display = "none";
    fpGS.style.display = "none";
    eGS.style.display = "none";
    etGS.style.display = "none";

    // Get the Gauge Checkboxes
    var vrmsGCheck = document.getElementById("VRms-gauge-section-chk");
    var irmsGCheck = document.getElementById("IRms-gauge-section-chk");
    var kwGCheck = document.getElementById("KW-gauge-section-chk");
    var fpGCheck = document.getElementById("Factor de Potencia-gauge-section-chk");
    var eGCheck = document.getElementById("Energia-gauge-section-chk");
    var etGCheck = document.getElementById("Energía Total-gauge-section-chk");
    
    const gaugeCheckboxes = document.querySelectorAll('#gauge-boxes input[type="checkbox"]');
    const gaugeControl = document.querySelector('#gauge-boxes #gauge-section-chk');

    gaugeControl.addEventListener('change', function() {
    gaugeCheckboxes.forEach(function(checkbox) {
        checkbox.checked = gaugeControl.checked;
    });
    });

    gaugeCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        if (!this.checked) {
        gaugeControl.checked = false;
        } else {
        const allChecked = Array.from(gaugeCheckboxes).every(function(c) {
            return c === gaugeControl || c.checked;
        });
        gaugeControl.checked = allChecked;
        }
        if (maxWidth700.matches) {
        vrmsRGS.style.display = vrmsGCheck.checked ? "block" : "none";
        irmsGS.style.display = irmsGCheck.checked ? "block" : "none";
        kwGS.style.display = kwGCheck.checked ? "block" : "none";
        fpGS.style.display = fpGCheck.checked ? "block" : "none";
        eGS.style.display = eGCheck.checked ? "block" : "none";
        etGS.style.display = etGCheck.checked ? "block" : "none";
    } else {
        vrmsRGS.style.display = vrmsGCheck.checked ? "flex" : "none";
        irmsGS.style.display = irmsGCheck.checked ? "flex" : "none";
        kwGS.style.display = kwGCheck.checked ? "flex" : "none";
        fpGS.style.display = fpGCheck.checked ? "flex" : "none";
        eGS.style.display = eGCheck.checked ? "flex" : "none";
        etGS.style.display = etGCheck.checked ? "flex" : "none";
    }
    });
    });
    
    // ------ Stat Sections ------//
    // Get the Stat Sections
    var sS = document.getElementById("stat-section");
    var vrmsRSS = document.getElementById("VRms-stat-section");
    var irmsSS = document.getElementById("IRms-stat-section");
    var kwSS = document.getElementById("KW-stat-section");
    var fpSS = document.getElementById("Factor de Potencia-stat-section");
    var eSS = document.getElementById("Energia-stat-section");
    var etSS = document.getElementById("Energía Total-stat-section");

    // Hide the Stat Sections
    vrmsRSS.style.display = "none";
    irmsSS.style.display = "none";
    kwSS.style.display = "none";
    fpSS.style.display = "none";
    eSS.style.display = "none";
    etSS.style.display = "none";

    // Get the Stat Checkboxes
    var vrmsSCheck = document.getElementById("VRms-stat-section-chk");
    var irmsSCheck = document.getElementById("IRms-stat-section-chk");
    var kwSCheck = document.getElementById("KW-stat-section-chk");
    var fpSCheck = document.getElementById("Factor de Potencia-stat-section-chk");
    var eSCheck = document.getElementById("Energia-stat-section-chk");
    var etSCheck = document.getElementById("Energía Total-stat-section-chk");

    const statCheckboxes = document.querySelectorAll('#stat-boxes input[type="checkbox"]');
    const statControl = document.querySelector('#stat-boxes #stat-section-chk');

    statControl.addEventListener('change', function() {
    statCheckboxes.forEach(function(checkbox) {
        checkbox.checked = statControl.checked;
    });
    });

    statCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        if (!this.checked) {
        statControl.checked = false;
        } else {
        const allChecked = Array.from(statCheckboxes).every(function(c) {
            return c === statControl || c.checked;
        });
        statControl.checked = allChecked;
        }
        if (maxWidth700.matches) {
        vrmsRSS.style.display = vrmsSCheck.checked ? "block" : "none";
        irmsSS.style.display = irmsSCheck.checked ? "block" : "none";
        kwSS.style.display = kwSCheck.checked ? "block" : "none";
        fpSS.style.display = fpSCheck.checked ? "block" : "none";
        eSS.style.display = eSCheck.checked ? "block" : "none";
        etSS.style.display = etSCheck.checked ? "block" : "none";
    } else {
        vrmsRSS.style.display = vrmsSCheck.checked ? "block" : "none";
        irmsSS.style.display = irmsSCheck.checked ? "block" : "none";
        kwSS.style.display = kwSCheck.checked ? "block" : "none";
        fpSS.style.display = fpSCheck.checked ? "block" : "none";
        eSS.style.display = eSCheck.checked ? "block" : "none";
        etSS.style.display = etSCheck.checked ? "block" : "none";
    }
    });
    });

    
}