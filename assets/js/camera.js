var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
    } else {
    console.log(this.status);
    console.log(this.responseText);
    console.log(this.readyState);
    }
};
xhttp.open("GET", "http://192.168.2.197:8080/about", true);
xhttp.send();

