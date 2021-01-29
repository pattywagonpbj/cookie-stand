'use strict';

console.log('Hello world');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  minCustEachHour: 23,
  maxCustEachHour: 65,
  avgCookiesSoldPerCustomer: 6.3,
  cookiesSoldEachHour: [],
  dailyStoreTotal: 0,

  randomCustomerPerHour: function () {
    // I borrowed from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * (this.maxCustEachHour - this.minCustEachHour) + this.minCustEachHour);
  },

  calcCookiesSoldHourly: function () {
    console.log(this.randomCustomerPerHour);
    for (let i = 0; i < hours.length; i++) {
      let numberCookiesPerHour = Math.ceil(this.randomCustomerPerHour() * this.avgCookiesSoldPerCustomer);
      this.cookiesSoldEachHour.push(numberCookiesPerHour);
      this.dailyStoreTotal += numberCookiesPerHour;
    }
    // console.log(this.cookiesSoldEachHour);
  },

  render: function () {
    this.calcCookiesSoldHourly();
    let container = document.getElementById('container');
    console.log(container);
    let h2 = document.createElement('h2');
    h2.innerHTML = this.name;
    container.append(h2);
    let ul = document.createElement('ul');
    h2.append(ul);
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.innerHTML = `${hours[i]} ${this.cookiesSoldEachHour[i]} cookies`;
      ul.append(li);
    }

    let li = document.createElement('li');
    li.innerHTML = `Total: ${this.dailyStoreTotal}`;
    ul.append(li);
  }
};

let tokyo = {
  name: 'Tokyo',
  minCustEachHour: 3,
  maxCustEachHour: 24,
  avgCookiesSoldPerCustomer: 1.2,
  cookiesSoldEachHour: [],
  dailyStoreTotal: 0,

  randomCustomerPerHour: function () {
    // I borrowed from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * (this.maxCustEachHour - this.minCustEachHour) + this.minCustEachHour);
  },

  calcCookiesSoldHourly: function () {
    console.log(this.randomCustomerPerHour);
    for (let i = 0; i < hours.length; i++) {
      let numberCookiesPerHour = Math.ceil(this.randomCustomerPerHour() * this.avgCookiesSoldPerCustomer);
      this.cookiesSoldEachHour.push(numberCookiesPerHour);
      this.dailyStoreTotal += numberCookiesPerHour;
    }
    // console.log(this.cookiesSoldEachHour);
  },

  render: function () {
    this.calcCookiesSoldHourly();
    let container = document.getElementById('container');
    console.log(container);
    let h2 = document.createElement('h2');
    h2.innerHTML = this.name;
    container.append(h2);
    let ul = document.createElement('ul');
    h2.append(ul);
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.innerHTML = `${hours[i]} ${this.cookiesSoldEachHour[i]} cookies`;
      ul.append(li);
    }

    let li = document.createElement('li');
    li.innerHTML = `Total: ${this.dailyStoreTotal}`;
    ul.append(li);
  }
};

let dubai = {
  name: 'Dubai',
  minCustEachHour: 11,
  maxCustEachHour: 38,
  avgCookiesSoldPerCustomer: 3.7,
  cookiesSoldEachHour: [],
  dailyStoreTotal: 0,

  randomCustomerPerHour: function () {
    // I borrowed from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * (this.maxCustEachHour - this.minCustEachHour) + this.minCustEachHour);
  },

  calcCookiesSoldHourly: function () {
    console.log(this.randomCustomerPerHour);
    for (let i = 0; i < hours.length; i++) {
      let numberCookiesPerHour = Math.ceil(this.randomCustomerPerHour() * this.avgCookiesSoldPerCustomer);
      this.cookiesSoldEachHour.push(numberCookiesPerHour);
      this.dailyStoreTotal += numberCookiesPerHour;
    }
    // console.log(this.cookiesSoldEachHour);
  },

  render: function () {
    this.calcCookiesSoldHourly();
    let container = document.getElementById('container');
    console.log(container);
    let h2 = document.createElement('h2');
    h2.innerHTML = this.name;
    container.append(h2);
    let ul = document.createElement('ul');
    h2.append(ul);
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.innerHTML = `${hours[i]} ${this.cookiesSoldEachHour[i]} cookies`;
      ul.append(li);
    }

    let li = document.createElement('li');
    li.innerHTML = `Total: ${this.dailyStoreTotal}`;
    ul.append(li);
  }
};

let paris = {
  name: 'Paris',
  minCustEachHour: 20,
  maxCustEachHour: 38,
  avgCookiesSoldPerCustomer: 2.3,
  cookiesSoldEachHour: [],
  dailyStoreTotal: 0,

  randomCustomerPerHour: function () {
    // I borrowed from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * (this.maxCustEachHour - this.minCustEachHour) + this.minCustEachHour);
  },

  calcCookiesSoldHourly: function () {
    console.log(this.randomCustomerPerHour);
    for (let i = 0; i < hours.length; i++) {
      let numberCookiesPerHour = Math.ceil(this.randomCustomerPerHour() * this.avgCookiesSoldPerCustomer);
      this.cookiesSoldEachHour.push(numberCookiesPerHour);
      this.dailyStoreTotal += numberCookiesPerHour;
    }
    // console.log(this.cookiesSoldEachHour);
  },

  render: function () {
    this.calcCookiesSoldHourly();
    let container = document.getElementById('container');
    console.log(container);
    let h2 = document.createElement('h2');
    h2.innerHTML = this.name;
    container.append(h2);
    let ul = document.createElement('ul');
    h2.append(ul);
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.innerHTML = `${hours[i]} ${this.cookiesSoldEachHour[i]} cookies`;
      ul.append(li);
    }

    let li = document.createElement('li');
    li.innerHTML = `Total: ${this.dailyStoreTotal}`;
    ul.append(li);
  }
};

let lima = {
  name: 'Lima',
  minCustEachHour: 2,
  maxCustEachHour: 16,
  avgCookiesSoldPerCustomer: 4.6,
  cookiesSoldEachHour: [],
  dailyStoreTotal: 0,

  randomCustomerPerHour: function () {
    // I borrowed from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * (this.maxCustEachHour - this.minCustEachHour) + this.minCustEachHour);
  },

  calcCookiesSoldHourly: function () {
    console.log(this.randomCustomerPerHour);
    for (let i = 0; i < hours.length; i++) {
      let numberCookiesPerHour = Math.ceil(this.randomCustomerPerHour() * this.avgCookiesSoldPerCustomer);
      this.cookiesSoldEachHour.push(numberCookiesPerHour);
      this.dailyStoreTotal += numberCookiesPerHour;
    }
    // console.log(this.cookiesSoldEachHour);
  },

  render: function () {
    this.calcCookiesSoldHourly();
    let container = document.getElementById('container');
    console.log(container);
    let h2 = document.createElement('h2');
    h2.innerHTML = this.name;
    container.append(h2);
    let ul = document.createElement('ul');
    h2.append(ul);
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.innerHTML = `${hours[i]} ${this.cookiesSoldEachHour[i]} cookies`;
      ul.append(li);
    }

    let li = document.createElement('li');
    li.innerHTML = `Total: ${this.dailyStoreTotal}`;
    ul.append(li);
  }
};
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
console.log(seattle);
