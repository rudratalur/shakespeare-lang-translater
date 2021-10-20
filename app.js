const textInput = document.querySelector("#txt-input");

const btnTranslate = document.querySelector("#btn-translate");

const outputDiv = document.querySelector("#output");

// console.log(textInput)


var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";


// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"


function getTranslatedURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler (error) {
    console.log("error occured", error)
    alert("something went wrong with server! Please try after sometime.")
}

function clickHandler() {
    // console.log("clicked")

    var inputText = textInput.value;


    fetch(getTranslatedURL(inputText))
    .then(response => response.json())
    .then(json => {
        var traslatedText = json.contents.translated;
        outputDiv.innerText = traslatedText;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)








// var serverURL = 

// function getTranslatedURL() {
//     return serverURL + "?" + "text=" + 
// }


// btnTranslate.addEventListener('click' , clickHandler)
