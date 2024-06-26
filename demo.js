let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let count = document.getElementById("count");
let total = document.getElementById("total");
let catgory = document.getElementById("catgory");
let btnSumbit = document.getElementById("submit");
let tmp;
let mode = "Create";
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
    title: title.value.toLowerCase(),
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    catgory: catgory.value.toLowerCase()
  };

  if (title.value != '' && price.value != '' && catgory.value != '' && newPro.count < 100) {
   if (mode == "Create") {
    if (newPro.count > 1) {
      for (let i = 0; i < newPro.count; i++) {
        DatePro.push(newPro);
      }
    } else {
      DatePro.push(newPro);
    }
  } else {
    DatePro[tmp] = newPro;
    mode = "Create";
    btnSumbit.innerHTML = "Create";
    count.style.display = "block";
  } 
  }else{
    ClrearData();
    alert('Enter your filed all');
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
      (i + 1) +
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
      '</td><td><button onclick = "UpdateData(' +
      i +
      ')" id="update">update</button></td><td><button onclick = deleteData(' +
      i +
      ') id="delete">delete</button></td></tr>';
  }
  document.getElementById("tbody").innerHTML = table;
  let btnDelete = document.getElementById("deleteAll");
  if (DatePro.length > 0) {
    btnDelete.innerHTML =
      '<button onclick = "deleteAll()">deleteAll(' +
      DatePro.length +
      ")</button>";
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

function UpdateData(i) {
  title.value = DatePro[i].title;
  price.value = DatePro[i].price;
  taxes.value = DatePro[i].taxes;
  ads.value = DatePro[i].ads;
  discount.value = DatePro[i].discount;
  catgory.value = DatePro[i].catgory;
  count.style.display = "none";
  get_total();
  btnSumbit.innerHTML = "Update";
  mode = "Update";
  tmp = i;
  scroll({
    top: 0,
    behavior: "smooth"
  });
}

let searchMode = "title";

function getSearchMode(id) {
  let search = document.getElementById("Search");

  if (id == "SearchTitle") {
    searchMode = "title";
    search.Placeholder = "Search by Title";
  } else {
    searchMode = "Category";
    search.Placeholder = "Search by Category";
  }
  search.focus();
  search.value = "";
  showData();
}

function searchData(value) {
  let table = "";
  if (searchMode == "title") {
    for (let i = 0; i < DatePro.length; i++) {
      if (DatePro[i].title.includes(value.toLowerCase())) {
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
          '</td><td><button onclick = "UpdateData(' +
          i +
          ')" id="update">update</button></td><td><button onclick = deleteData(' +
          i +
          ') id="delete">delete</button></td></tr>';
      }
    }
  } else {
    for (let i = 0; i < DatePro.length; i++) {
      if (DatePro[i].catgory.includes(value.toLowerCase())) {
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
          '</td><td><button onclick = "UpdateData(' +
          i +
          ')" id="update">update</button></td><td><button onclick = deleteData(' +
          i +
          ') id="delete">delete</button></td></tr>';
      }
    }
  }

  document.getElementById("tbody").innerHTML = table;
}
// // server.mjs
// import { createServer } from 'node:http';

// const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World!\n');
// });

// // starts a simple http server locally on port 3000
// server.listen(3000, '127.0.0.1', () => {
//   console.log('Listening on 127.0.0.1:3000');
// });

// // run with `node server.mjs`
