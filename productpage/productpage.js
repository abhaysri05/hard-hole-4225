let sortbuttonA_Z=document.getElementById("high-to-low")
let sortbuttonZ_A=document.getElementById("low-to-high")

let sortbuttonA_Zrating=document.getElementById("high-to-low_rating")
let sortbuttonZ_Arating=document.getElementById("low-to-high_rating")

let pagination=document.getElementById("paigination")




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
  <button class="add_to_cart">Add To Cart</button>
  </div>
    </div>
    </div>`
    
    return card
}
