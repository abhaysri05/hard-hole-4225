let sortbuttonA_Z=document.getElementById("high-to-low")
let sortbuttonZ_A=document.getElementById("low-to-high")

let sortbuttonA_Zrating=document.getElementById("high-to-low_rating")
let sortbuttonZ_Arating=document.getElementById("low-to-high_rating")

// let pagination=document.getElementById("paigination")

// //  let add_to_cart=document.querySelector(".add_to_cart")
//  let products=JSON.parse(localStorage.getItem("products"))||[];

// // // let products = [];

// function addProduct(product) {
//   products.push(product);
//   localStorage.setItem('products', JSON.stringify(products));
// }


//            function  store() {
//   let product = {
//       name: document.querySelector('h3').innerHTML,
//       price: document.querySelector('.price').innerHTML,
//       img: document.querySelector('img').src
//   };
//   addProduct(product);
// };
// Add an event listener to the "add_to_cart" button
// document.querySelectorAll('.add_to_cart').forEach(el => {
//   el.addEventListener('click', addToCart);
// });

// function addToCart(event) {
//   // Get the parent card element
//   const card = event.target.closest('.card');
//   // Get the data-id attribute of the card
//   const id = card.getAttribute('data-id');
//   // Get the name, rating, imageurl, reviews, and price from the card
//   const name = card.querySelector('.card-title').innerText;
//   const rating = card.querySelector('.card-rating').innerText;
//   const imageurl = card.querySelector('image').getAttribute('src');
//   const reviews = card.querySelector('.card-reviews').innerText;
//   const price = card.querySelector('.card-description').innerText;
//   // Create an object with the data
//   const item = { id, name, rating, imageurl, reviews, price };
//   console.log(item)
//   // Check if there is already a cart in local storage
//   let cart = JSON.parse(localStorage.getItem('cart')) || [];
//   // Add the item to the cart
//   cart.push(item);
//   // Save the cart back to local storage
//   localStorage.setItem('cart', JSON.stringify(cart));
//   // Show a message to the user
//   alert(`${name} has been added to your cart!`);
// }






Alldata=[]

sortbuttonA_Z.addEventListener("click", () => {
        if (Alldata && Alldata.length) {
          Alldata.sort((a,b) => {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
            return 0;
          })
      
          rendercardlist(Alldata)
        } else {
          console.log('nothing to sort')
        }
         
        
       
      });

      sortbuttonZ_A.addEventListener("click", () => {
        if (Alldata && Alldata.length) {
          Alldata.sort((a,b) => {
            if (a.price < b.price) return 1;
            if (a.price > b.price) return -1;
            return 0;
          })
      
          rendercardlist(Alldata)
        } else {
          console.log('nothing to sort')
        }
      
       
      });

      sortbuttonA_Zrating.addEventListener("click", () => {
        if (Alldata && Alldata.length) {
          Alldata.sort((a,b) => {
            if (a.rating > b.rating) return 1;
            if (a.rating < b.rating) return -1;
            return 0;
          })
      
          rendercardlist(Alldata)
        } else {
          console.log('nothing to sort')
        }
      
       
      });

      sortbuttonZ_Arating.addEventListener("click", () => {
        if (Alldata && Alldata.length) {
          Alldata.sort((a,b) => {
            if (a.rating < b.rating) return 1;
            if (a.rating > b.rating) return -1;
            return 0;
          })
      
          rendercardlist(Alldata)
        } else {
          console.log('nothing to sort')
        }
      
       
      });

     

let mainSection=document.getElementById("caretake_data")
function fetchdata(){
    fetch("https://test-api-zlw9.onrender.com/caretake")
    .then((res)=>{
       
        return res.json();
       
    })
    .then((data)=>{
        console.log(data)
    

        let caretake_data =data.map(item=>({
            id:item.id,
            name:item.name,
            rating:item.rating,
            reviews:item.reviews,
            imageurl:item.image,
            price:item.price
        }))
        rendercardlist(caretake_data)
        Alldata=caretake_data
    })
}
fetchdata()

function rendercardlist(cardData){
    let cardList=`
    <div class="row">
    ${cardData.map(item=>getcard(item.id,item.name,item.rating,item.imageurl,item.reviews,item.price,item.reviews))
    .join("")}
</div>
    `

    mainSection.innerHTML=cardList
}
function getcard(id,name,rating,imageurl,reviews,price,reviews){
    let card=`
   <div  class="card" data-id=${id}>
    <div class="card-image">
    <image src=${imageurl} "alt=error"/>
    </div>
    <div class="card-body">
      <div class="space">
      <span class="card-rating">${rating}</span>
      <span class="card-reviews">${reviews} reviews</span></div>
    <h3 class=" card-item card-title">${name}</h3>
   
    <div class="card-item card-description">${price}</div>
    <div class="button">
    <button  class="add_to_cart">
    <i class="fas fa-cart-plus"></i> Add to Cart
</button>

  </div>
    </div>
    </div>`
    
    return card
}
