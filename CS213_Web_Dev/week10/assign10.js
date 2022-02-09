// This is the JavaScript document for part 2 of week 10

function callPhp(func) {
    //Activiates PHP script to grab file information
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "assign10.php");
    xhttp.onload = function () {
        func(this.responseText);
    }
    xhttp.send();
}

function displayFiles(response) {
    // Callback function for receiving PHP file data
    const files = JSON.parse(response);

    document.getElementById("title").innerHTML = 
        "<h1>" + files[0].cwd + "<h1>";

    for (let i = 0; i < 10; i++) {

        document.getElementById("fileDisplay").innerHTML += `
        <div class = 'lineItem'>
            <div class='fileInfo toTop' id='name'>
                ${files[i].fileName}
            </div>
            <div class='fileInfo toTop' id='type'>
                ${files[i].fileType}
            </div>
            <div class='fileInfo' id='filePath'>
                ${files[i].cwd}
            </div>
            <div class='fileInfo'>
                ${
                    files[i].fileType !== 'dir' ? 
                    `<button type='button' class='itemLink' onclick='window.location = ${files[i].fileName}'>
                        Click here to display page
                    </button>`
                    : ''
                }
            </div>
        </div>
        `
    }

/**********************************FOR TESTING AND DEBUGGING**********************************/
    // let testArray = Array();
    // for (let i = 0; i < 10; i++) {
    //     testArray[i] = new FileClass();
    //     testArray[i].fileName = "assign10.html";
    //     testArray[i].fileType = "file" + (i + 1);
    //     testArray[i].cwd = "C:\\Users\\Owner\\Desktop\\Jayden's School Work\\CS213_Web_Dev\\week10";        
    // }

    // for (let i = 0; i < 10; i++) {
    //     let filePath = testArray[i].cwd + "\\" + testArray[i].fileName;
    //     document.getElementById("fileDisplay").innerHTML += 
    //     "<figure class = 'lineItem'>" +
    //     "<div class = 'fileInfo toTop' id = 'name'>" + testArray[i].fileName + "</div>" + 
    //     "<div class = 'fileInfo to Top' id = 'type'>" + testArray[i].fileType + "</div>" + 
    //     "<div class = 'fileInfo' id = 'filePath'>" + testArray[i].cwd + "</div>" + 
    //     '<a class = "itemLink fileInfo" href = "' + filePath + '">' + 
    //     "Click here to display page</a></figure>";
    // }
// }

// class FileClass {
//     constructor() {
//         this.fileName;
//         this.fileType;
//         this.cwd;
//     }
/*********************************************************************************************/
}