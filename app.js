var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

outputDiv.innerText ="Divya"
// console.log(outputDiv);
// console.log(btnTranslate);
// console.log(txtInput);
function clickHandler(){
    outputDiv.innerText ="translated: " + txtInput.value;
    // console.log("clicked!");
    // console.log("input",txtInput.value);
    };

btnTranslate.addEventListener("click", clickHandler);