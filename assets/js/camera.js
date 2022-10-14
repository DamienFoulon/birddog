function setPTZSetup() {
    var xhr = new XMLHttpRequest();
    var url = "http://192.168.1.114:8080/birddogptzsetup";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("SET :",this.responseText);
        }
    }
    var data = JSON.stringify({"PanSpeed":"8","TiltSpeed":"8","ZoomSpeed":"4"});
    xhr.send(data);
}

function savePreset(presetId) {
    let xhr = new XMLHttpRequest();
    let url = "http://192.168.1.114:8080/save";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("SET :",this.responseText);
        }
    }
    let data = JSON.stringify({"Preset":`Preset-${presetId}`});
    xhr.send(data);
}

function goPreset(presetID) {
    let xhr = new XMLHttpRequest();
    let url = "http://192.168.1.114:8080/recall";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("GO :",this.responseText);
        }
    }
    let data = JSON.stringify({"Preset":`Preset-${presetID}`});
    xhr.send(data);
}

goPreset(10);