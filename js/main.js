const body = window.document.querySelector("body");

const closeSpinner = () => body.classList.add("page-content-loaded");

document.addEventListener("DOMContentLoaded", closeSpinner);
// spinner js-----------------------------------------------------------
// nabar js -----------------------------------------------------------
const header = window.document.querySelector(".navbar");
const MY_WINDOW_HEIGHT = window.innerHeight;

window.addEventListener("scroll", () => {
  if (window.scrollY > MY_WINDOW_HEIGHT - 75) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// scrol btn -----------------------------------------
const scrolToTop = window.document.querySelector(".scrol-to-top");

scrolToTop.addEventListener("click", () => {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight - 75) {
    scrolToTop.classList.remove("hidden");
  } else {
    scrolToTop.classList.add("hidden");
  }
});
// creating menu list ---------------------------
var menuContentbreak = document.querySelector(".menu-list-breakfast");
var menuContentLunch = document.querySelector(".menu-list-Lunch");
var menuContentDinner = document.querySelector(".menu-list-Dinner");
var menuRowBreak = [
  {
    img: "img/food-1.jpg",
    h4: "Beef Roast Source",
    pargraph: "Meat, Potatoes, Rice, Tomatoe",
    price: "$39",
  },
  {
    img: "img/food-2.jpg",
    h4: "Beef Roast Source",
    pargraph: "Meat, Potatoes, Rice, Tomatoe",
    price: "$29",
  },
  {
    img: "img/food-3.jpg",
    h4: "Beef Roast Source",
    pargraph: "Meat, Potatoes, Rice, Tomatoe",
    price: "$15",
  },
];
var menuRowLunch = [
  {
    img: "img/d1.jpg",
    h4: "Beef Roast Source",
    pargraph: "Meat, Potatoes, Rice, Tomatoe",
    price: "$39",
  },
  {
    img: "img/d2.jpg",
    h4: "Beef Roast Source",
    pargraph: "Meat, Potatoes, Rice, Tomatoe",
    price: "$29",
  },
  {
    img: "img/d-3.jpg",
    h4: "Beef Roast Source",
    pargraph: "Meat, Potatoes, Rice, Tomatoe",
    price: "$15",
  },
];
var menuRowDinner = [
  {
    img: "img/d-5.jpg",
    h4: "Beef Roast Source",
    pargraph: "Meat, Potatoes, Rice, Tomatoe",
    price: "$39",
  },
  {
    img: "img/d-8.jpg",
    h4: "Beef Roast Source",
    pargraph: "Meat, Potatoes, Rice, Tomatoe",
    price: "$29",
  },
  {
    img: "img/d-9.jpg",
    h4: "Beef Roast Source",
    pargraph: "Meat, Potatoes, Rice, Tomatoe",
    price: "$15",
  },
];
function render() {
  var row = "";
  menuRowBreak.forEach(function Food(value) {
    row += ` 
    <div class="menu-list__row">
          <div class="row">
              <div class="col-4">
                  <img class="menu-pic" src=${value.img} alt="">
              </div>
              <div class="col-6">
                  <div class="menu-descrip">
                      <h4>${value.h4}</h4>
                      <p>${value.pargraph}</p>
                  </div>
              </div>
              <div class="col-2">
                  <div class="price">
                      <span>${value.price}</span>
                  </div>
              </div>
          </div>
      </div>`;
  });
  menuContentbreak.innerHTML = row;
}
render();
function renderTwo() {
  var row = "";
  menuRowLunch.forEach(function Food(value) {
    row += ` 
      <div class="menu-list__row">
            <div class="row">
                <div class="col-4">
                    <img class="menu-pic" src=${value.img} alt="">
                </div>
                <div class="col-6">
                    <div class="menu-descrip">
                        <h4>${value.h4}</h4>
                        <p>${value.pargraph}</p>
                    </div>
                </div>
                <div class="col-2">
                    <div class="price">
                        <span>${value.price}</span>
                    </div>
                </div>
            </div>
        </div>`;
  });
  menuContentLunch.innerHTML = row;
}
renderTwo();
function renderThree() {
  var row = "";
  menuRowDinner.forEach(function Food(value) {
    row += ` 
      <div class="menu-list__row">
            <div class="row">
                <div class="col-4">
                    <img class="menu-pic" src=${value.img} alt="">
                </div>
                <div class="col-6">
                    <div class="menu-descrip">
                        <h4>${value.h4}</h4>
                        <p>${value.pargraph}</p>
                    </div>
                </div>
                <div class="col-2">
                    <div class="price">
                        <span>${value.price}</span>
                    </div>
                </div>
            </div>
        </div>`;
  });
  menuContentDinner.innerHTML = row;
}
renderThree();
// animate menu list ----------------------------------------
var menuAnimation = document.querySelector(".menu-sec");

window.addEventListener("scroll", () => {
  if (window.scrollY > menuAnimation.offsetTop - 250) {
    menuContentbreak.classList.add("list-moving");
    menuContentLunch.classList.add("list-moving");
    menuContentDinner.classList.add("list-moving");
  }
});
// animation for reservation section
var reservationSec = document.querySelector(".reservation-sec");
var reservationSectionContainer = document.querySelector(
  ".reservation-sec__container"
);

window.addEventListener("scroll", () => {
  if (window.scrollY > reservationSec.offsetTop - 350) {
    reservationSectionContainer.classList.add("table-moving");
  }
});
// ---------count down section-----------------------------------
var countDownDate = new Date("dec 12, 2025 12:22:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(
    ".counter-action"
  ).innerHTML = `<div class="col text-center">
  <span>${days}</span>
  <h4>days</h4>
</div>
<div class="col text-center">
  <span>${hours}</span>
  <h4>hours</h4>
</div>
<div class="col text-center">
  <span>${minutes}</span>
  <h4>min</h4>
</div>
<div class="col text-center">
  <span>${seconds}</span>
  <h4>sec</h4>
</div>`;

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(
      ".counter-action"
    ).innerHTML = `<p>We are open now Come and Enjoy our food</p>`;
  }
}, 1000);

//  reservation bar --------------------------------------------------------------js
var wholeTables = document.querySelectorAll(".whole-table");
var table = document.querySelectorAll(".table");
var sideBar = document.querySelector(".side-bar-reservation");
var bookingBtn = document.querySelector("#btn-reservation");
var closing = document.querySelector("#closing-sidebar");

wholeTables.forEach(function (wholeTable, tableIndex) {
  wholeTable.addEventListener("click", function () {
    sideBar.classList.add("showing-bar");
    if (wholeTable.classList.contains("reserved")) {
      wholeTable.classList.remove("reserved");
      removeFromReserved(tableIndex);
    } else {
      wholeTable.classList.add("reserved");
      addToReserved(tableIndex);
    }
  });
});
bookingBtn.addEventListener("click", function () {
  sideBar.classList.remove("showing-bar");
});
closing.addEventListener("click", function () {
  sideBar.classList.remove("showing-bar");
});

updateReservedTables();

function getReserved() {
  const localReserved = localStorage.getItem("reserved") || "{}";
  const reserved = JSON.parse(localReserved);

  return reserved;
}

function addToReserved(tableIndex) {
  const reserved = getReserved();
  reserved[tableIndex] = true;

  updateLocalStorage(reserved);
}

function removeFromReserved(tableIndex) {
  const reserved = getReserved();
  reserved[tableIndex] = false;

  updateLocalStorage(reserved);
}

function updateLocalStorage(reserved) {
  const reservedString = JSON.stringify(reserved);
  localStorage.setItem("reserved", reservedString);
}

function updateReservedTables() {
  const reserved = getReserved();

  for (const tableIndex in reserved) {
    const isReserved = reserved[tableIndex];
    if (isReserved) {
      wholeTables[tableIndex].classList.add("reserved");
    }
  }
}
// j query -=---------------------------------
$(document).ready(function () {
  $("#sliding-btn").click(function () {
    $("#table-sec").slideToggle("slow");
  });
});
$(document).ready(function () {
  $("input.timepicker").timepicker({});
});
