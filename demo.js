let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let count = document.getElementById('count');
let total = document.getElementById('total');
let catgory = document.getElementById('catgory');
let btnSumbit = document.getElementById('submit');


//get total
function get_total(){
if (price.value != ''){
let result = (+price.value + +taxes.value + +ads.value)
- +discount.value;
total.innerHTML = result;
total.style.background = '#040';
}else{
    total.innerHTML = '';
    total.style.background = '#a00d02';

}
}

