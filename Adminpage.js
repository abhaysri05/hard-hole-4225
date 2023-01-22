let form=document.querySelector("form")

form.addEventListener("submit",async function(e){
      e.preventDefault()
    let product={
                name:form.name.value,
                brand:form.brand.value,
                category:form.category.value,
                price:form.price.value,
                rating:form.rating.value,
                reviews:form.review.value,
                image:form.img.value,
            };
             
            try{
                let res=await fetch("https://test-api-zlw9.onrender.com/caretake",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify(product),
                })
                let data=await res.json();
                console.log(data)
                alert ("item has been added to product page")
                window.location.assign("./productpage/productpage.html")
            }
            catch(error){
                console.log(JSON.stringify(error))
            }
})