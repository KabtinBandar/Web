
let txtEGP = document.getElementById('txtEGP');
let txtUSD = document.getElementById('txtUSD');
txtUSD.onkeyup =  function(){
txtEGP.value = txtUSD.value * 47;
}
txtEGP.onkeyup =  function(){
  txtUSD.value = txtEGP.value * 47;
  }
  