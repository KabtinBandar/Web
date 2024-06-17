let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let count = document.getElementById("count");
let total = document.getElementById("total");
let catgory = document.getElementById("catgory");
let btnSumbit = document.getElementById("submit");

//get total
function get_total() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = result;
    total.style.background = "#040";
  } else {
    total.innerHTML = "";
    total.style.background = "#a00d02";
  }
}
let DatePro;
if (localStorage.Product != null) {
  DatePro = JSON.parse(localStorage.Product);
} else {
  DatePro = [];
}

btnSumbit.onclick = function() {
  let newPro = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    catgory: catgory.value
  };
  if (newPro.count > 1) {
    for (let i = 0; i < newPro.count; i++) {
      DatePro.push(newPro);
    }
  } else {
    DatePro.push(newPro);
  }

  localStorage.setItem("Product", JSON.stringify(DatePro));
  ClrearData();
  showData();
};

function ClrearData() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  count.value = "";
  catgory.value = "";
  total.innerHTML = "";
}

function showData() {
  let table = "";
  for (let i = 0; i < DatePro.length; i++) {
    table +=
      "<tr><td>" +
      i +
      "</td><td>" +
      DatePro[i].title +
      "</td><td>" +
      DatePro[i].price +
      "</td><td>" +
      DatePro[i].taxes +
      "<td>" +
      DatePro[i].ads +
      "</td><td>" +
      DatePro[i].discount +
      "</td><td>" +
      DatePro[i].total +
      "</td><td>" +
      DatePro[i].catgory +
      '</td><td><button id="update">update</button></td><td><button onclick = deleteData(' +
      i +
      ') id="delete">delete</button></td></tr>';
  }
  document.getElementById("tbody").innerHTML = table;
  let btnDelete = document.getElementById("deleteAll");
  if (DatePro.length > 0) {
    btnDelete.innerHTML = '<button onclick = "deleteAll()">deleteAll('+DatePro.length+')</button>';
  } else {
    btnDelete.innerHTML = "";
  }
}
showData();

function deleteData(i) {
  DatePro.splice(i, 1);
  localStorage.Product = JSON.stringify(DatePro);
  showData();
}

function deleteAll() {
  localStorage.clear();
  DatePro.splice(0);
  showData();
}
