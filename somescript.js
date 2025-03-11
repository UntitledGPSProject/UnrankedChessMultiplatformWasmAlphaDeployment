//import exports from "./module.mjs"

async function makeXMLHttpRequest(method, url, headersMapJsonString) {

    var headers;
    try {
        headers = new Map(JSON.parse(headersMapJsonString))
    } catch (e) {
        headers = new Map()
    }

    console.log('Making an arbitrary XMLHttpRequest...')
    console.log('Method:');
    console.log(method);
    console.log('URL:');
    console.log(url);
    console.log('Headers:');
    console.log(headersMapJsonString);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
           // Typical action to be performed when the document is ready:
           //document.getElementById("demo").innerHTML = xhttp.responseText;
           console.log('Received response:');
           console.log(xhttp.responseText);
        }
    };
    headers.forEach( function () {
            console.log('Setting request header...');
            console.log('Request header value: ' + value);
            console.log('Request header key: ' + key)
            xhttp.setRequestHeader(value, key)
        }
    )
    xhttp.open(method, url, true);
    xhttp.send();
}