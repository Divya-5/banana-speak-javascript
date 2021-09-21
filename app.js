var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");


// var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverUrl="https://api.funtranslations.com/translate/minion.json";

function getTranslatedUrl(text){
    return serverUrl + "?" + "text=" + text;
}

// outputDiv.innerText ="Divya"
// console.log(outputDiv);
// console.log(btnTranslate);
// console.log(txtInput);

function errorHandler(){
 console.log("error occured",error);
 alert("something wrong with server, try after sometime");
}
function clickHandler(){
    // outputDiv.innerText ="translated: " + txtInput.value;
    // console.log("clicked!");
    // console.log("input",txtInput.value);
    const inputText=txtInput.value;//input
    //calling server for processing
    fetch(getTranslatedUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;//output
    })
        // console.log(json.contents.translated)
    .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler);