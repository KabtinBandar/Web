
let txtEGP = document.getElementById('txtEGP');
let txtUSD = document.getElementById('txtUSD');
txtUSD.onkeyup =  function(){
txtEGP.value = txtUSD.value * 47;
console.log("EGP : "+txtEGP.value);
}
txtEGP.onkeyup =  function(){
  txtUSD.value = txtEGP.value * 47;
  console.log("USD : "+txtUSD.value);
  }
  