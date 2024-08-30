'use strict'

const buttondogfood = document.getElementById("bdfood");
buttondogfood.addEventListener("click", dogfood);
let resultText = "" ;
function dogfood() {
  resultText = "🍚";
    console.log(resultText);
  document.getElementsByTagName("td")[1].textContent = resultText + document.getElementsByTagName("td")[1].textContent;
}
const buttondogfoodm = document.getElementById("bdfoodm");
buttondogfoodm.addEventListener("click", dogfoodm);
function dogfoodm() {
  document.getElementsByTagName("td")[1].textContent = document.getElementsByTagName("td")[1].textContent.slice(0, -1);
}

const buttonDogst = document.getElementById("bdst");
buttonDogst.addEventListener("click", dogst);
resultText = "" ;
function dogst() {
  resultText = "🫗";
    console.log(resultText);
  document.getElementsByTagName("td")[4].textContent = resultText + document.getElementsByTagName("td")[4].textContent;
}

const buttonDogstm = document.getElementById("bdstm");
buttonDogstm.addEventListener("click", dogstm);
function dogstm() {
  document.getElementsByTagName("td")[4].textContent = document.getElementsByTagName("td")[4].textContent.slice(0, -1);
}

const buttonDogbt = document.getElementById("bdbt");
buttonDogbt.addEventListener("click", dogbt);
resultText = "" ;
function dogbt() {
  resultText = "🪨";
    console.log(resultText);
  document.getElementsByTagName("td")[7].textContent = resultText + document.getElementsByTagName("td")[7].textContent;
}

const buttonDogbtm = document.getElementById("bdbtm");
buttonDogbtm.addEventListener("click", dogbtm);
function dogbtm() {
  document.getElementsByTagName("td")[7].textContent = document.getElementsByTagName("td")[7].textContent.slice(0, -1);
}

const buttonDogShower = document.getElementById("bdshower");
buttonDogShower.addEventListener("click", dogshower);
resultText = "" ;
function dogshower() {
  resultText = "🛁";
    console.log(resultText);
  document.getElementsByTagName("td")[10].textContent = resultText + document.getElementsByTagName("td")[10].textContent;
}

const buttonDogShowerm = document.getElementById("bdshowerm");
buttonDogShowerm.addEventListener("click", dogshowerm);
function dogshowerm() {
  document.getElementsByTagName("td")[10].textContent = document.getElementsByTagName("td")[10].textContent.slice(0, -1);
}

const buttonDogDrug = document.getElementById("bddrug");
buttonDogDrug.addEventListener("click", dogDrug);
resultText = "" ;
function dogDrug() {
  resultText = "💊";
    console.log(resultText);
  document.getElementsByTagName("td")[13].textContent = resultText + document.getElementsByTagName("td")[13].textContent;
}

const buttonDogDrugm = document.getElementById("bddrugm");
buttonDogDrugm.addEventListener("click", dogDrugm);
function dogDrugm() {
  document.getElementsByTagName("td")[13].textContent = document.getElementsByTagName("td")[13].textContent.slice(0, -1);
}



const buttonCatfood = document.getElementById("bcfood");
buttonCatfood.addEventListener("click", catfood);
resultText = "" ;
function catfood() {
  resultText = "🍚";
    console.log(resultText);
  document.getElementsByTagName("td")[16].textContent = resultText + document.getElementsByTagName("td")[16].textContent;
}

const buttonCatfoodm = document.getElementById("bcfoodm");
buttonCatfoodm.addEventListener("click", catfoodm);
function catfoodm() {
  document.getElementsByTagName("td")[16].textContent = document.getElementsByTagName("td")[16].textContent.slice(0, -1);
}

const buttonCatst = document.getElementById("bcst");
buttonCatst.addEventListener("click", catst);
resultText = "" ;
function catst() {
  resultText = "🫗";
    console.log(resultText);
  document.getElementsByTagName("td")[19].textContent = resultText + document.getElementsByTagName("td")[19].textContent;
}
const buttonCatstm = document.getElementById("bcstm");
buttonCatstm.addEventListener("click", catstm);
function catstm() {
  document.getElementsByTagName("td")[19].textContent = document.getElementsByTagName("td")[19].textContent.slice(0, -1);
}

const buttonCatbt = document.getElementById("bcbt");
buttonCatbt.addEventListener("click", catbt);
resultText = "" ;
function catbt() {
  resultText = "🪨";
    console.log(resultText);
  document.getElementsByTagName("td")[22].textContent = resultText + document.getElementsByTagName("td")[22].textContent;
}

const buttonCatbtm = document.getElementById("bcbtm");
buttonCatbtm.addEventListener("click", catbtm);
function catbtm() {
  document.getElementsByTagName("td")[22].textContent = document.getElementsByTagName("td")[22].textContent.slice(0, -1);
}

const buttonCatBrush = document.getElementById("bcbrush");
buttonCatBrush.addEventListener("click", catbrashing);
resultText = "" ;
function catbrashing() {
  resultText = "🪮";
    console.log(resultText);
  document.getElementsByTagName("td")[25].textContent = resultText + document.getElementsByTagName("td")[25].textContent;
}

const buttonCatBrushm = document.getElementById("bcbrushm");
buttonCatBrushm.addEventListener("click", catbrashingm);
function catbrashingm() {
  document.getElementsByTagName("td")[25].textContent = document.getElementsByTagName("td")[25].textContent.slice(0, -1);
}

const buttonCatNail = document.getElementById("bcnail");
buttonCatNail.addEventListener("click", catNail);
resultText = "" ;
function catNail() {
  resultText = "💅";
    console.log(resultText);
  document.getElementsByTagName("td")[28].textContent = resultText + document.getElementsByTagName("td")[28].textContent;
}

const buttonCatNailm = document.getElementById("bcnailm");
buttonCatNailm.addEventListener("click", catNailm);
function catNailm() {
  document.getElementsByTagName("td")[28].textContent = document.getElementsByTagName("td")[28].textContent.slice(0, -1);
}

