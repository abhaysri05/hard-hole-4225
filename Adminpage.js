let productsArr=JSON.parse(localStorage.getItem("products"))||[]
let form=document.querySelector("form")
form.addEventListener("submit",function(event){
    event.preventDefault();
    let product={
        name:form.name.value,
        brand:form.brand.value,
        category:form.category.value,
        price:form.price.value,
        img:form.img.value,
    }
    if(product.brand=="all" || product.category=="all"){
        alert("please provide category & brand")
    }else{
         productsArr.push(product);
         localStorage.setItem("products",JSON.stringify(productsArr))
         alert("product added successfully")
    }
})