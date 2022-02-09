// This document is for the week 09 AJAX html

function httpRequest(file, func) {
    const xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            func(this.response);
        }
    }
    xhttp.open("GET", file, true);
    xhttp.send();
}

function selectCountry(country) {
    let file = country + ".txt";
    httpRequest(file, displayCountry);
}

function displayCountry(response) {
    let returningString = response.replace(/\d\s/g, "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0");
    returningString.replace()
    document.getElementById("countryDataDiv").innerHTML = returningString;
}

function getFileData() {
    let file = document.getElementById("fileInput").value;
    httpRequest(file, displayFileData);
}

function displayFileData(response) {
    let returningString = "",
    responseArray = JSON.parse(response);
    for (student in responseArray["students"]) {
        for (data in responseArray.students[student]) {
            if (responseArray["students"][student][data] instanceof Object) {
                returningString += data + ":<br>";
                for (line in responseArray["students"][student][data]) {
                    returningString += line + ": " + 
                    responseArray["students"][student][data][line] + "<br>";
                }
            } else {
                returningString += data + ": " +
                responseArray["students"][student][data] + "<br>";
            }
        }
    }
    document.getElementById("studentDataDiv").innerHTML = returningString;
}