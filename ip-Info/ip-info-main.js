function main() {
    var ip = "";
    var aso = "";        
    var asn = "";    
    var continent = "";
    var cc = "";
    var country = "";
    var city = "";
    var postal = "";
    var latitude = "";
    var longitude = "";
    var tz = "";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            ip = JSON.parse(this.responseText).ip;
            aso = JSON.parse(this.responseText).aso;
            asn = JSON.parse(this.responseText).asn;
            continent = JSON.parse(this.responseText).continent;
            cc = JSON.parse(this.responseText).cc;
            country = JSON.parse(this.responseText).country;
            city = JSON.parse(this.responseText).city;
            postal = JSON.parse(this.responseText).postal;
            latitude = JSON.parse(this.responseText).latitude;
            longitude = JSON.parse(this.responseText).longitude;
            tz = JSON.parse(this.responseText).tz;
            document.getElementById("ip-info-ip").innerHTML = ip;
            document.getElementById("ip-info-aso").innerHTML = aso;
            document.getElementById("ip-info-asn").innerHTML = asn;
            document.getElementById("ip-info-continent").innerHTML = continent;
            document.getElementById("ip-info-cc").innerHTML = cc;
            document.getElementById("ip-info-country").innerHTML = country;
            document.getElementById("ip-info-city").innerHTML = city;
            document.getElementById("ip-info-postal").innerHTML = postal;
            document.getElementById("ip-info-latlng").innerHTML = latitude + ", " + longitude;
            document.getElementById("ip-info-tz").innerHTML = tz;
        }
    };
    xmlhttp.open("GET", "https://ident.me/json", true);
    xmlhttp.send();  
}
main(); // call the function right away