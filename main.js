let entrer = "";
let dict = {
  a: "%",
  b: ";",
  c: "'",
  d: "€",
  e: "|",
  f: "_",
  g: "&",
  h: "-",
  i: ">",
  j: "+",
  k: "(",
  l: ")",
  m: "/",
  n: "!",
  o: "{",
  p: "}",
  q: "@",
  r: "=",
  s: "#",
  t: "[",
  u: "<",
  v: ":",
  w: "*",
  x: '"',
  y: "]",
  z: "\\",
  " ": "",
};
let antidict = {
  "\\": "z",
  "]": "y",
  ' " ': "x",
  "*": "w",
  ":": "v",
  "<": "u",
  "[": "t",
  "#": "s",
  "=": "r",
  "@": "q",
  "}": "p",
  "{": "o",
  "!": "n",
  "/": "m",
  ")": "l",
  "(": "k",
  "+": "j",
  ">": "i",
  "-": "h",
  "&": "g",
  _: "f",
  "|": "e",
  "€": "d",
  "'": "c",
  ";": "b",
  "%": "a",
  " ": "",
};
let a;
let result = "";
var res;
var sai;
//-----------------------------------------------------
function controle() {
  result = "";
  a = 0;
  b = 0;

  var saisie = document.getElementById("test").value;
  documen = saisie.toLowerCase();
  a = saisie.length;
  var tes = documen.split("");
  var x;
  //-------------------------------------------------------------------------------------------------------------------------------

  documen.split("").forEach((str) => (result += dict[str] + " "));
  /*for (x in tes) {
    var j=tes[x];
    for (b in dict) {
      if(j==b){
        //injection dans result
        result+=dict[b];
      }
    }
  } */
  var b = result.length;
  if (a > b) {
    res = document.getElementById("resultat").innerHTML =
      "les accent ne sont pas pris en compte";
    return;
  }
  {
    /*aide amis optionelle
  documen.split("").forEach( str =>result += dict[str]+" ");

  ----------------------------------------------------------------------------------------------------------------------------*/
  }
  res = document.getElementById("resultat").innerHTML = result;
  sai = document.getElementById("long").innerHTML =
    "ce document contient " + a + " caractere";
  return;
}

function resultat() {
  result = "";
  a = 0;
  b = 0;
  var saisie = document.getElementById("test").value;
  a = saisie.length;
  var tes = saisie.split("");
  var x;
  //----------------------------------------------------------------------------------
  documen.split("").forEach((str) => (result += dict[str] + " "));
  /*for (x in tes) {
    var j=tes[x];
    for (b in dict) {
      if(j==b){
        //injection dans result
        result+=dict[b];
      }
    }
  } */
  var b = result.length;
  //---------------------------------
  res = document.getElementById("resultat").innerHTML = result;
  var m = result.length;
  sai = document.getElementById("long").innerHTML =
    "ce document contient " + a + " caractere";
  return;
}
