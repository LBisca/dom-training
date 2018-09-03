var block = document.getElementById("block");
var myArray = [];
var people = [
  "Geraldo",
  "Mike",
  "Bruno",
  "Mark",
  "Jorge",
  "Kim",
  "Jane",
  "Mary",
  "Chloe"
];
var key = random;
var random;

function start() {
  myArray = people.slice();
  myArray.sort(function(a, b) {
    return 0.5 - Math.random();
  });
  build();
  findPerson(myArray);
}

function findPerson() {
  key = myArray[Math.floor(Math.random() * 9)];
  document.getElementById("t2").innerText = `find ${key}`;
}

function build() {
  for (var x = 0; x < myArray.length; x++) {
    var str = myArray[x];
    var shuffled = str
      .split("")
      .sort(function() {
        return 0.5 - Math.random();
      })
      .join("");
    document.getElementById("block").innerHTML += `<div class='box' id='${
      myArray[x]
    }' onclick="eEle(this)" onmouseover="upText(this, '${
      myArray[x]
    }')" onmouseout="upText(this,'Hidden ${x + 1}')">Hidden ${x + 1}</div>`;
  }
}

function upText(t, mes) {
  t.innerHTML = mes;
}

function eEle(t) {
  if (key == t.id) {
    console.log("Correct");
  } else {
    console.log("Incorrect");
  }
}
