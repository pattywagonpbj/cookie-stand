'use strict';

console.log('Hello world');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allStores = [];
let grandTotal = 0;
let footerTotal = [];

// let seattle = {
//   name: 'Seattle',
//   minCustEachHour: 23,
//   maxCustEachHour: 65,
//   avgCookiesSoldPerCustomer: 6.3,
//   cookiesSoldEachHour: [],
//   dailyStoreTotal: 0,
// };

function Store(name, minCustEachHour, maxCustEachHour, avgCookiesSoldPerCustomer) {
  this.name = name;
  this.minCustEachHour = minCustEachHour;
  this.maxCustEachHour = maxCustEachHour;
  this.avgCookiesSoldPerCustomer = avgCookiesSoldPerCustomer;
  this.cookiesSoldEachHour = [];
  this.dailyStoreTotal = 0;
  allStores.push(this);
  // this.render();
}

Store.prototype.randomCustomerPerHour = function () {
  // I borrowed from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return Math.floor(Math.random() * (this.maxCustEachHour - this.minCustEachHour) + this.minCustEachHour);
},

Store.prototype.calcCookiesSoldHourly = function () {
  // console.log(this.randomCustomerPerHour);
  for (let i = 0; i < hours.length; i++) {
    let numberCookiesPerHour = Math.ceil(this.randomCustomerPerHour() * this.avgCookiesSoldPerCustomer);
    this.cookiesSoldEachHour.push(numberCookiesPerHour);
    this.dailyStoreTotal += numberCookiesPerHour;
  }
  // console.log(this.cookiesSoldEachHour);
};
// tableHeader();

Store.prototype.render = function () {
  this.calcCookiesSoldHourly();
  let tableBody = document.getElementById('CookiesSold');
  let tr = document.createElement('tr');
  // console.log(tableBody);
  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesSoldEachHour[i];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = this.dailyStoreTotal;
  tr.appendChild(td);
  tableBody.appendChild(tr);
};


function tableHeader () {
  let tr = document.getElementById('StoreHours');

  let th = document.createElement('th');
  tr.appendChild(th);

  for (let i=0; i < hours.length; i++) {
    th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
  }

  th = document.createElement('th');
  th.textContent = 'Daily Location Total';
  tr.appendChild(th);
  // tableBody.appendChild(tr);
}

function tableFooter () {
  tablefooterCalc();
  let tr = document.getElementById('CookiesSoldPerHour');

  let td = document.createElement('td');
  td.textContent = 'Grand Total';
  tr.appendChild(td);

  for(let i=0; i < hours.length; i++) {
    td = document.createElement('td');
    td.textContent = footerTotal[i];
    tr.appendChild(td);
  }

  td = document.createElement('td');
  td.textContent = grandTotal;
  tr.appendChild(td);
}

function tablefooterCalc(){
  footerTotal = [];
  grandTotal = 0;
  for(let i=0; i < hours.length; i++){
    let hourTotal = 0;
    for(let j=0; j < allStores.length; j++){
      hourTotal += allStores[j].cookiesSoldEachHour[i];
    }
    grandTotal += hourTotal;
    footerTotal.push(hourTotal);
  }
}

let seattleLocation = new Store('Seattle', 23, 65, 6.3);
let tokyoLocation = new Store('Tokyo', 3, 24, 1.2);
let dubaiLocation = new Store('Dubai', 11, 38, 3.7);
let parisLocation = new Store('Paris', 20, 38, 2.3);
let limaLocation = new Store('Lima', 2, 16, 4.6);

seattleLocation.render();
tokyoLocation.render();
dubaiLocation.render();
parisLocation.render();
limaLocation.render();
tableHeader();
tableFooter();
// tablefooterCalc();
