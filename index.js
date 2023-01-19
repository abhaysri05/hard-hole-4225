function firstBlock() {
  document.querySelector(".shop-category").addEventListener("mouseover", () => {
    document.querySelector(".shop-category").style.borderBottom =
      "5px solid #77777e";
    let drop = document.querySelector(".drop-shop-category");
    drop.style.display = "flex";
    drop.style.width = "80%";
    drop.style.justifyContent = "space-around";
  });
  let drop = document.querySelector(".drop-shop-category");
  drop.addEventListener("mouseover", function () {
    drop.style.display = "flex";
    document.querySelector(".shop-category").style.borderBottom =
      "5px solid #77777e";
    drop.addEventListener("mouseout", function () {
      drop.style.display = "none";
      document.querySelector(".shop-category").style.borderBottom =
        "5px solid white";
    });
  });
  document.querySelector(".shop-category").addEventListener("mouseout", () => {
    let drop = document.querySelector(".drop-shop-category");
    drop.style.display = "none";
    document.querySelector(".shop-category").style.borderBottom =
      "5px solid white";
  });
}
firstBlock();
function secondBlock() {
  document.querySelector(".best-seller").addEventListener("mouseover", () => {
    let drop = document.querySelector(".drop-best-seller");
    drop.style.display = "flex";
    drop.style.width = "40%";
    drop.style.justifyContent = "space-around";
    document.querySelector(".best-seller").style.borderBottom =
      "5px solid #77777e";
  });
  let drop = document.querySelector(".drop-best-seller");
  drop.addEventListener("mouseover", function () {
    drop.style.display = "flex";

    drop.addEventListener("mouseout", function () {
      drop.style.display = "none";
      document.querySelector(".best-seller").style.borderBottom =
        "5px solid white";
    });
  });
  document.querySelector(".best-seller").addEventListener("mouseout", () => {
    let drop = document.querySelector(".drop-best-seller");
    drop.style.display = "none";
    document.querySelector(".best-seller").style.borderBottom =
      "5px solid white";
  });
}
secondBlock();
function thirdBlock() {
  document.querySelector(".brands").addEventListener("mouseover", () => {
    let drop = document.querySelector(".drop-brands");
    drop.style.display = "flex";
    drop.style.width = "40%";
    drop.style.justifyContent = "space-around";
    document.querySelector(".brands").style.borderBottom = "5px solid #77777e";
  });
  let drop = document.querySelector(".drop-brands");
  drop.addEventListener("mouseover", function () {
    drop.style.display = "flex";
    document.querySelector(".brands").style.borderBottom = "5px solid #77777e";
    drop.addEventListener("mouseout", function () {
      drop.style.display = "none";
      document.querySelector(".brands").style.borderBottom = "5px solid white";
    });
  });
  document.querySelector(".brands").addEventListener("mouseout", () => {
    let drop = document.querySelector(".drop-brands");
    drop.style.display = "none";
    document.querySelector(".brands").style.borderBottom = "5px solid white";
  });
}
thirdBlock();
function fourthBlock() {
  document.querySelector(".deals").addEventListener("mouseover", () => {
    let drop = document.querySelector(".drop-deals");
    drop.style.display = "flex";
    drop.style.width = "40%";
    drop.style.justifyContent = "space-around";
    document.querySelector(".deals").style.borderBottom = "5px solid #77777e";
  });
  let drop = document.querySelector(".drop-deals");
  drop.addEventListener("mouseover", function () {
    drop.style.display = "flex";
    document.querySelector(".deals").style.borderBottom = "5px solid #77777e";
    drop.addEventListener("mouseout", function () {
      drop.style.display = "none";
      document.querySelector(".deals").style.borderBottom = "5px solid white";
    });
  });
  document.querySelector(".deals").addEventListener("mouseout", () => {
    let drop = document.querySelector(".drop-deals");
    drop.style.display = "none";
    document.querySelector(".deals").style.borderBottom = "5px solid white";
  });
}
fourthBlock();
function fifthBlock() {
  document.querySelector(".customer").addEventListener("mouseover", () => {
    let drop = document.querySelector(".drop-customer");
    drop.style.display = "flex";
    drop.style.width = "20%";
    drop.style.justifyContent = "space-around";
    document.querySelector(".customer").style.borderBottom =
      "5px solid #77777e";
  });
  let drop = document.querySelector(".drop-customer");
  drop.addEventListener("mouseover", function () {
    drop.style.display = "flex";
    document.querySelector(".customer").style.borderBottom =
      "5px solid #77777e";
    drop.addEventListener("mouseout", function () {
      drop.style.display = "none";
      document.querySelector(".customer").style.borderBottom =
        "5px solid white";
    });
  });
  document.querySelector(".customer").addEventListener("mouseout", () => {
    let drop = document.querySelector(".drop-customer");
    drop.style.display = "none";
    document.querySelector(".customer").style.borderBottom = "5px solid white";
  });
}
fifthBlock();

// function seventhBlock() {
//   document.querySelector(".profile").addEventListener("mouseover", () => {
//     let drop = document.querySelector(".drop-profile");
//     drop.style.display = "block";
//   });
//   let drop = document.querySelector(".drop-profile");
//   drop.addEventListener("mouseover", function () {
//     drop.style.display = "block";
//     drop.addEventListener("mouseout", function () {
//       drop.style.display = "none";
//     });
//   });
//   document.querySelector(".profile").addEventListener("mouseout", () => {
//     let drop = document.querySelector(".drop-profile");
//     drop.style.display = "none";
//   });
// }
// seventhBlock();

//sticky navbar
window.onscroll = function () {
  myFunction();
};

var navlist = document.getElementById("navbar2");
var sticky = navlist.offsetTop;

/* Function to stick the nav bar */
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navlist.classList.add("sticky");
  } else {
    navlist.classList.remove("sticky");
  }
}

// buttons on slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

// automatic slideshow
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 4000); // Change image every 4 seconds
}
var slideIndex2 = 0;
carousel2();

function carousel2() {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel2, 4000); // Change image every 4 seconds
}

let mega1 = document.getElementById("product");
let trending1 = document.getElementById("trending");

// fetching products api call
fetchApi("indexdata.json");
// fetchFlashSale()
async function fetchApi(apiurl) {
  try {
    let response = await fetch(`${apiurl}`);
    response = await response.json();
    //  console.log(response.megaprice);
    let megaPriceData = response.megaprice.map((data) => {
      return {
        id: data.id,
        brand: data.brand,
        category: data.category,
        image: data.image,
        rating: data.rating,
        reviews: data.reviews,
        product_name: data.product_name,
        sell_price: data.sell_price,
        old_price: data.old_price,
        offer: data.offer,
        premium_price: data.premium_price,
      };
    });
    //  console.log(response.trending);
    let trendingData = response.trending.map((data) => {
      return {
        id: data.id,
        brand: data.brand,
        category: data.category,
        image: data.image,
        rating: data.rating,
        reviews: data.reviews,
        product_name: data.product_name,
        sell_price: data.sell_price,
        old_price: data.old_price,
        offer: data.offer,
        premium_price: data.premium_price,
      };
    });

    createDom(megaPriceData, mega1);
    createDom(trendingData, trending1);
  } catch (err) {
    console.log(err);
  }
}

//dom creation
function createDom(data, tbody) {
  tbody.innerHTML = null;
  data.forEach((element) => {
    let card = document.createElement("div");
    let imgdiv = document.createElement("div");
    let ratingdiv = document.createElement("div");
    let pricediv = document.createElement("div");
    let cartdiv = document.createElement("div");

    let image = document.createElement("img");
    image.src = element.image;

    //text content
    let ratingbtn = document.createElement("button");
    ratingbtn.innerText = element.rating + "⭐";
    let reviewCounter = document.createElement("span");
    reviewCounter.innerText = element.reviews + " " + "reviews";

    let name = document.createElement("h4");
    name.innerText = element.product_name.substring(0, 50) + "....";

    let newprice = document.createElement("span");
    newprice.innerText = "₹" + element.sell_price;
    let oldprice = document.createElement("span");
    oldprice.innerText = "₹" + element.old_price;
    oldprice.setAttribute("class", "dc-price");
    newprice.setAttribute("class", "sell-price");

    let discount = document.createElement("span");
    discount.innerText = element.offer + "% off";
    discount.setAttribute("class", "disc");

    let premiumprice1 = document.createElement("div");
    premiumprice1.innerText =
      "🌟" + "₹" + element.premium_price + "  for Premium Members";

    let cartBtn = document.createElement("button");
    cartBtn.innerText = "🛒 Add to Cart";

    imgdiv.append(image);
    ratingdiv.append(ratingbtn, reviewCounter);
    pricediv.append(newprice, oldprice, discount);
    cartdiv.append(cartBtn);
    card.append(imgdiv, ratingdiv, name, pricediv, premiumprice1, cartdiv);
    tbody.append(card);
  });
}
