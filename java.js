var aryofsec = new Array();
var aryofhour = new Array();
var sec = document.getElementById("sec");
var min = document.getElementById("min");
var hour = document.getElementById("hour");
var nowsec = document.getElementById("nowsec");
var nowmin = document.getElementById("nowmin");
var nowhour = document.getElementById("nowhour");
var degOfsec = 6;
var degOfhour = 30;
for (var i = 1; i <= 59; i++) {
  aryofsec[i] = degOfsec;
  degOfsec = degOfsec + 6;
}
aryofsec[0] = 360;
//for hour
for (var i = 1; i <= 12; i++) {
  aryofhour[i] = degOfhour;
  degOfhour = degOfhour + 30;
  //console.log(aryofhour[i]);
}
aryofhour[0] = 360;
setInterval(secshow, 1000);
var j;
function secshow() {
  var now = new Date();
  j = now.getSeconds();
  k = now.getMinutes();
  l = now.getHours() % 12;
  if (now.getHours() <= 12) {
    console.log("am");
  } else {
    console.log("pm");
  }
  sec.style.transform = `translate(-50%, -50%) rotate(${aryofsec[j]}deg)`;
  nowsec.textContent = j;
  min.style.transform = `translate(-50%, -50%) rotate(${aryofsec[k]}deg)`;
  nowmin.textContent = k;
  hour.style.transform = `translate(-50%, -50%) rotate(${aryofhour[l]}deg)`;

    if (l != 0) {
    nowhour.textContent = l;
  } else {
    nowhour.textContent = 12;
  }
}
